package at.htl.diplproject.service;

import at.htl.diplproject.domain.Tickets;
import at.htl.diplproject.repository.TicketsRepository;
import at.htl.diplproject.service.dto.TicketsDTO;
import at.htl.diplproject.service.mapper.TicketsMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.LockModeType;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Tickets}.
 */
@Service
@Transactional
public class TicketsService {

    private final Logger log = LoggerFactory.getLogger(TicketsService.class);

    private final TicketsRepository ticketsRepository;

    private final TicketsMapper ticketsMapper;

    public TicketsService(TicketsRepository ticketsRepository, TicketsMapper ticketsMapper) {
        this.ticketsRepository = ticketsRepository;
        this.ticketsMapper = ticketsMapper;
    }

    /**
     * Save a tickets.
     *
     * @param ticketsDTO the entity to save.
     * @return the persisted entity.
     */
    public TicketsDTO save(TicketsDTO ticketsDTO) {
        log.debug("Request to save Tickets : {}", ticketsDTO);
        Tickets tickets = ticketsMapper.toEntity(ticketsDTO);
        tickets = ticketsRepository.save(tickets);
        return ticketsMapper.toDto(tickets);
    }

    /**
     * Get all the tickets.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<TicketsDTO> findAll() {
        log.debug("Request to get all Tickets");
        return ticketsRepository.findAll().stream()
            .map(ticketsMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one tickets by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<TicketsDTO> findOne(Long id) {
        log.debug("Request to get Tickets : {}", id);
        return ticketsRepository.findById(id)
            .map(ticketsMapper::toDto);
    }

    /**
     * Delete the tickets by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Tickets : {}", id);
        ticketsRepository.deleteById(id);
    }
}
