package at.htl.diplproject.service.mapper;

import at.htl.diplproject.domain.Cart;
import at.htl.diplproject.service.dto.CartDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-10-22T15:51:52+0200",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
@Component
public class CartMapperImpl implements CartMapper {

    @Override
    public Cart toEntity(CartDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Cart cart = new Cart();

        cart.setId( dto.getId() );
        cart.setTicketId( dto.getTicketId() );
        cart.setUserId( dto.getUserId() );

        return cart;
    }

    @Override
    public CartDTO toDto(Cart entity) {
        if ( entity == null ) {
            return null;
        }

        CartDTO cartDTO = new CartDTO();

        cartDTO.setId( entity.getId() );
        cartDTO.setTicketId( entity.getTicketId() );
        cartDTO.setUserId( entity.getUserId() );

        return cartDTO;
    }

    @Override
    public List<Cart> toEntity(List<CartDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Cart> list = new ArrayList<Cart>( dtoList.size() );
        for ( CartDTO cartDTO : dtoList ) {
            list.add( toEntity( cartDTO ) );
        }

        return list;
    }

    @Override
    public List<CartDTO> toDto(List<Cart> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<CartDTO> list = new ArrayList<CartDTO>( entityList.size() );
        for ( Cart cart : entityList ) {
            list.add( toDto( cart ) );
        }

        return list;
    }
}
