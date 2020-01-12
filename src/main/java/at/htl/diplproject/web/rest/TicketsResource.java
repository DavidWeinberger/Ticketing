package at.htl.diplproject.web.rest;

import at.htl.diplproject.service.TicketsService;
import at.htl.diplproject.service.dto.TicketsDTO;
import at.htl.diplproject.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link at.htl.diplproject.domain.Tickets}.
 */
@RestController
@RequestMapping("/api")
public class TicketsResource {

    private final Logger log = LoggerFactory.getLogger(TicketsResource.class);

    private static final String ENTITY_NAME = "tickets";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TicketsService ticketsService;

    public TicketsResource(TicketsService ticketsService) {
        this.ticketsService = ticketsService;
    }

    /**
     * {@code POST  /tickets} : Create a new tickets.
     *
     * @param ticketsDTO the ticketsDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new ticketsDTO, or with status {@code 400 (Bad Request)} if the tickets has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/tickets")
    public ResponseEntity<List<TicketsDTO>> createTickets(@Valid @RequestBody TicketsDTO ticketsDTO) throws URISyntaxException {
        log.debug("REST request to save Tickets : {}", ticketsDTO);
        if (ticketsDTO.getId() != null) {
            throw new BadRequestAlertException("A new tickets cannot already have an ID", ENTITY_NAME, "idexists");
        }
        List<TicketsDTO> list = new LinkedList<>();
        if(ticketsDTO.getType() == 2){
            int rows = ticketsDTO.getSectorRows();
            int seats = ticketsDTO.getSeats();
            for (int i = 1; i <= rows; i++) {
                for (int x = 1; x <= seats; x++) {
                    TicketsDTO ticket = ticketsDTO;
                    ticket.setSeats(x);
                    ticket.setSectorRows(rows);
                    ticket.setAmount(1);
                    if(ticket.getState() == null) {
                        ticket.setState(0);
                    }
                    list.add(ticketsService.save(ticket));
                }
            }
        } else {
            for (int i = 1; i <= ticketsDTO.getAmount(); i++) {
                TicketsDTO ticket = ticketsDTO;
                ticket.setSeats(i);
                ticket.setAmount(1);
                ticket.setState(0);
                list.add(ticketsService.save(ticket));
            }
        }
        return ResponseEntity.ok(list);
    }

    /**
     * {@code PUT  /tickets} : Updates an existing tickets.
     *
     * @param ticketsDTO the ticketsDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated ticketsDTO,
     * or with status {@code 400 (Bad Request)} if the ticketsDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the ticketsDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/tickets")
    public ResponseEntity<TicketsDTO> updateTickets(@Valid @RequestBody TicketsDTO ticketsDTO) throws URISyntaxException {
        log.debug("REST request to update Tickets : {}", ticketsDTO);
        if (ticketsDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TicketsDTO result = ticketsService.save(ticketsDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, ticketsDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /tickets} : get all the tickets.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of tickets in body.
     */
    @GetMapping("/tickets")
    public List<TicketsDTO> getAllTickets() {
        log.debug("REST request to get all Tickets");
        return ticketsService.findAll();
    }

    /**
     * {@code GET  /tickets/:id} : get the "id" tickets.
     *
     * @param id the id of the ticketsDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the ticketsDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/tickets/{id}")
    public ResponseEntity<TicketsDTO> getTickets(@PathVariable Long id) {
        log.debug("REST request to get Tickets : {}", id);
        Optional<TicketsDTO> ticketsDTO = ticketsService.findOne(id);
        return ResponseUtil.wrapOrNotFound(ticketsDTO);
    }

    /**
     * {@code DELETE  /tickets/:id} : delete the "id" tickets.
     *
     * @param id the id of the ticketsDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/tickets/{id}")
    public ResponseEntity<Void> deleteTickets(@PathVariable Long id) {
        log.debug("REST request to delete Tickets : {}", id);
        ticketsService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
