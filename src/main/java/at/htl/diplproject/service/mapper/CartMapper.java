package at.htl.diplproject.service.mapper;

import at.htl.diplproject.domain.*;
import at.htl.diplproject.service.dto.CartDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Cart} and its DTO {@link CartDTO}.
 */
@Mapper(componentModel = "spring", uses = {JHI_USERMapper.class, TICKETSMapper.class})
public interface CartMapper extends EntityMapper<CartDTO, Cart> {

    @Mapping(source = "jHI_USER.id", target = "jHI_USERId")
    @Mapping(source = "tICKETS.id", target = "tICKETSId")
    CartDTO toDto(Cart cart);

    @Mapping(source = "jHI_USERId", target = "jHI_USER")
    @Mapping(source = "tICKETSId", target = "tICKETS")
    Cart toEntity(CartDTO cartDTO);

    default Cart fromId(Long id) {
        if (id == null) {
            return null;
        }
        Cart cart = new Cart();
        cart.setId(id);
        return cart;
    }
}
