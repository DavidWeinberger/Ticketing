package at.htl.diplproject.service.mapper;

import at.htl.diplproject.domain.Cart;
import at.htl.diplproject.service.dto.CartDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-10-08T20:08:26+0200",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_162 (Oracle Corporation)"
)
@Component
public class CartMapperImpl implements CartMapper {

    @Override
    public Cart toEntity(CartDTO arg0) {
        if ( arg0 == null ) {
            return null;
        }

        Cart cart = new Cart();

        cart.setId( arg0.getId() );
        cart.setTicketId( arg0.getTicketId() );
        cart.setUserId( arg0.getUserId() );
        cart.setTime( arg0.getTime() );

        return cart;
    }

    @Override
    public CartDTO toDto(Cart arg0) {
        if ( arg0 == null ) {
            return null;
        }

        CartDTO cartDTO = new CartDTO();

        cartDTO.setId( arg0.getId() );
        cartDTO.setTicketId( arg0.getTicketId() );
        cartDTO.setUserId( arg0.getUserId() );
        cartDTO.setTime( arg0.getTime() );

        return cartDTO;
    }

    @Override
    public List<Cart> toEntity(List<CartDTO> arg0) {
        if ( arg0 == null ) {
            return null;
        }

        List<Cart> list = new ArrayList<Cart>( arg0.size() );
        for ( CartDTO cartDTO : arg0 ) {
            list.add( toEntity( cartDTO ) );
        }

        return list;
    }

    @Override
    public List<CartDTO> toDto(List<Cart> arg0) {
        if ( arg0 == null ) {
            return null;
        }

        List<CartDTO> list = new ArrayList<CartDTO>( arg0.size() );
        for ( Cart cart : arg0 ) {
            list.add( toDto( cart ) );
        }

        return list;
    }
}
