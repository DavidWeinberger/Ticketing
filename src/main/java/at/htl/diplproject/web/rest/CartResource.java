package at.htl.diplproject.web.rest;

import at.htl.diplproject.service.CartService;
import at.htl.diplproject.service.TicketsService;
import at.htl.diplproject.service.dto.CartDTO;
import at.htl.diplproject.service.dto.TicketsDTO;
import at.htl.diplproject.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

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
    private final SimpMessageSendingOperations messagingTemplate;

    public CartResource(CartService cartService, TicketsService ticketsService, SimpMessageSendingOperations messagingTemplate) {
        this.cartService = cartService;
        this.ticketsService = ticketsService;
        this.messagingTemplate = messagingTemplate;
    }

    /**
     * {@code POST  /carts} : Create a new cart.
     *
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new cartDTO, or with status {@code 400 (Bad Request)} if the cart has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/carts")
    public ResponseEntity<CartDTO> createCart(@Valid @RequestBody CartDTO cartDTO) throws URISyntaxException {
        log.debug("REST request to save Cart : {}", cartDTO);
        if (cartDTO.getId() != null) {
            throw new BadRequestAlertException("A new cart cannot already have an ID", ENTITY_NAME, "idexists");
        }

        CartDTO result = cartService.save(cartDTO);
        sentCreateWS(cartDTO);
        return ResponseEntity.created(new URI("/api/carts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }


    @MessageMapping("/topic/notification")
    @SendTo("/topic/notificationChannel")
    String sentNotification (String message) {
        return message;
    }

    private void sentCreateWS(CartDTO cartDTO) {
        String msg = "update";
        if(cartDTO != null) {
            final int[] count = {0};
            if (ticketsService.findOne((long) cartDTO.getTicketId()).get().getType() == 2) {
                cartService.findAll().forEach(x -> {
                    if (x.getTicketId() == cartDTO.getTicketId()) {
                        count[0]++;
                        if (count[0] > 1) {
                            cartService.delete(x.getId());
                        }
                    }
                });
            }
            msg =  "update|user:" + cartDTO.getUserId() + "|ticket:" + cartDTO.getTicketId();
        }

        this.messagingTemplate.convertAndSend("/topic/notificationChannel", msg);
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
        if(!getAllCarts().stream().filter(x -> x.getTicketId() == cartDTO.getTicketId()).findFirst().isPresent()){
            sentCreateWS(cartDTO);
            CartDTO result = cartService.save(cartDTO);
            return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, cartDTO.getId().toString()))
                .body(result);
        }
        return ResponseEntity.badRequest().build();
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
        cartService.delete(id);
        sentCreateWS(null);
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
            }
        }
        sentCreateWS(null);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
