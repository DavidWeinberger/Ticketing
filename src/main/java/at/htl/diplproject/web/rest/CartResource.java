package at.htl.diplproject.web.rest;

import at.htl.diplproject.service.CartService;
import at.htl.diplproject.service.TicketsService;
import at.htl.diplproject.service.dto.CartDTO;
import at.htl.diplproject.service.dto.TicketsDTO;
import at.htl.diplproject.web.rest.errors.BadRequestAlertException;
import at.htl.diplproject.web.websocket.SocketHandler;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * REST controller for managing {@link at.htl.diplproject.domain.Cart}.
 */
@RestController
@RequestMapping("/api")
@EnableScheduling
public class CartResource {

    private final Logger log = LoggerFactory.getLogger(CartResource.class);

    private static final String ENTITY_NAME = "cart";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CartService cartService;
    private final TicketsService ticketsService;

    public CartResource(CartService cartService, TicketsService ticketsService) {
        this.cartService = cartService;
        this.ticketsService = ticketsService;
    }

    /**
     * {@code POST  /carts} : Create a new cart.
     *
     * @param cartDTO the cartDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new cartDTO, or with status {@code 400 (Bad Request)} if the cart has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    private void updateBulkTicket(Long id){
        final int[] count = {0};
        if(ticketsService.findOne(id).get().getType() != 2){
            cartService.findAll().forEach(x -> {
                if((long)x.getTicketId() == id){
                    count[0]++;
                }
            });
            TicketsDTO ticketsDTO = ticketsService.findOne(id).get();
            ticketsDTO.setState(count[0] + ticketsDTO.getSeats());
            ticketsService.save(ticketsDTO);
        }
    }


    @PostMapping("/carts")
    public ResponseEntity<CartDTO> createCart(@Valid @RequestBody CartDTO cartDTO) throws URISyntaxException {
        log.debug("REST request to save Cart : {}", cartDTO);
        if (cartDTO.getId() != null) {
            throw new BadRequestAlertException("A new cart cannot already have an ID", ENTITY_NAME, "idexists");
        }

        CartDTO result = cartService.save(cartDTO);
        updateBulkTicket((long)result.getTicketId());
        sentCreateWS(cartDTO);
        return ResponseEntity.created(new URI("/api/carts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    private void sentCreateWS(CartDTO cartDTO){
        final int[] count = {0};
        if(ticketsService.findOne((long)cartDTO.getTicketId()).get().getType() == 2){
            cartService.findAll().forEach(x -> {
                if(x.getTicketId() == cartDTO.getTicketId()){
                    count[0]++;
                    if(count[0] > 1){
                        cartService.delete(x.getId());
                    }
                }
            });
        }
        SocketHandler.getSocketHandler().sendTextMessage("|user:" + cartDTO.getUserId() + "|ticket:" + cartDTO.getTicketId());
    }

    /**
     * {@code PUT  /carts} : Updates an existing cart.
     *
     * @param cartDTO the cartDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated cartDTO,
     * or with status {@code 400 (Bad Request)} if the cartDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the cartDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/carts")
    public ResponseEntity<CartDTO> updateCart(@Valid @RequestBody CartDTO cartDTO) throws URISyntaxException {
        log.debug("REST request to update Cart : {}", cartDTO);
        if (cartDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        SocketHandler.getSocketHandler().sendTextMessage("|user:" + cartDTO.getUserId() + "|ticket:" + cartDTO.getTicketId());
        CartDTO result = cartService.save(cartDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, cartDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /carts} : get all the carts.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of carts in body.
     */
    @GetMapping("/carts")
    public List<CartDTO> getAllCarts() {
        log.debug("REST request to get all Carts");
        return cartService.findAll();
    }

    /**
     * {@code GET  /carts/:id} : get the "id" cart.
     *
     * @param id the id of the cartDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the cartDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/carts/{id}")
    public ResponseEntity<CartDTO> getCart(@PathVariable Long id) {
        log.debug("REST request to get Cart : {}", id);
        Optional<CartDTO> cartDTO = cartService.findOne(id);
        return ResponseUtil.wrapOrNotFound(cartDTO);
    }

    /**
     * {@code GET  /carts/:id} : get the "id" cart.
     *
     * @param id the id of the cartDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the cartDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/carts/all/{id}")
    public List<CartDTO> getAllCart(@PathVariable Long id) {
        log.debug("REST request to get all Carts : {}", id);
        List<CartDTO> cartDTO = new LinkedList<>();
        cartService.findAll().forEach(x -> {
            if (x.getUserId().longValue() == id) {
                cartDTO.add(x);
            }
        });
        return cartDTO;
    }

    /**
     * {@code DELETE  /carts/:id} : delete the "id" cart.
     *
     * @param id the id of the cartDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/carts/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        log.debug("REST request to delete Cart : {}", id);
        // Long ticketId = (long)cartService.findOne(id).get().getTicketId();
        cartService.delete(id);
        // updateBulkTicket(ticketId);
        SocketHandler.getSocketHandler().sendTextMessage("");
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    /**
     * {@code DELETE  /carts/:id} : delete the "id" cart.
     *
     * @param id the id of the cartDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/carts/ticket/{id}")
    public ResponseEntity<Void> deleteCartbyTicketId(@PathVariable Long id) {
        log.debug("REST request to delete Cart by TicketId : {}", id);
        List<CartDTO> cartDTOList = cartService.findAll();
        for (CartDTO x : cartDTOList) {
            if (x.getTicketId() == Integer.parseInt(id.toString())) {
                cartService.delete(x.getId());
                updateBulkTicket((long)x.getTicketId());
                if (ticketsService.findOne(id).get().getType() != 2) {
                    break;
                }
            }
        }
        SocketHandler.getSocketHandler().sendTextMessage("");
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
