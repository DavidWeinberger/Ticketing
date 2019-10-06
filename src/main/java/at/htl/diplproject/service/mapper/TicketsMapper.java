package at.htl.diplproject.service.mapper;

import at.htl.diplproject.domain.*;
import at.htl.diplproject.service.dto.TicketsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tickets} and its DTO {@link TicketsDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TicketsMapper extends EntityMapper<TicketsDTO, Tickets> {



    default Tickets fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tickets tickets = new Tickets();
        tickets.setId(id);
        return tickets;
    }
}
