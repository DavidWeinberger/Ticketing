package at.htl.diplproject.service.mapper;

import at.htl.diplproject.domain.Tickets;
import at.htl.diplproject.service.dto.TicketsDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-10-22T13:52:54+0200",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
@Component
public class TicketsMapperImpl implements TicketsMapper {

    @Override
    public Tickets toEntity(TicketsDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Tickets tickets = new Tickets();

        tickets.setId( dto.getId() );
        tickets.setType( dto.getType() );
        tickets.setPrice( dto.getPrice() );
        tickets.setPlace( dto.getPlace() );
        tickets.setAmount( dto.getAmount() );

        return tickets;
    }

    @Override
    public TicketsDTO toDto(Tickets entity) {
        if ( entity == null ) {
            return null;
        }

        TicketsDTO ticketsDTO = new TicketsDTO();

        ticketsDTO.setId( entity.getId() );
        ticketsDTO.setType( entity.getType() );
        ticketsDTO.setPrice( entity.getPrice() );
        ticketsDTO.setPlace( entity.getPlace() );
        ticketsDTO.setAmount( entity.getAmount() );

        return ticketsDTO;
    }

    @Override
    public List<Tickets> toEntity(List<TicketsDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Tickets> list = new ArrayList<Tickets>( dtoList.size() );
        for ( TicketsDTO ticketsDTO : dtoList ) {
            list.add( toEntity( ticketsDTO ) );
        }

        return list;
    }

    @Override
    public List<TicketsDTO> toDto(List<Tickets> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<TicketsDTO> list = new ArrayList<TicketsDTO>( entityList.size() );
        for ( Tickets tickets : entityList ) {
            list.add( toDto( tickets ) );
        }

        return list;
    }
}
