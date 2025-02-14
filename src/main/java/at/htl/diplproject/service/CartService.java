package at.htl.diplproject.service;

import at.htl.diplproject.service.dto.CartDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link at.htl.diplproject.domain.Cart}.
 */
public interface CartService {

    /**
     * Save a cart.
     *
     * @param cartDTO the entity to save.
     * @return the persisted entity.
     */
//    @Lock(LockModeType.PESSIMISTIC_WRITE)
    CartDTO save(CartDTO cartDTO);

    /**
     * Get all the carts.
     *
     * @return the list of entities.
     */
//    @Lock(LockModeType.PESSIMISTIC_READ)
    List<CartDTO> findAll();


    /**
     * Get the "id" cart.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
//    @Lock(LockModeType.PESSIMISTIC_READ)
    Optional<CartDTO> findOne(Long id);

    /**
     * Delete the "id" cart.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
