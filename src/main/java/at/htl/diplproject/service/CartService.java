package at.htl.diplproject.service;

import at.htl.diplproject.service.dto.CartDTO;
import org.springframework.data.jpa.repository.Lock;

import javax.persistence.LockModeType;
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
    CartDTO save(CartDTO cartDTO);

    /**
     * Get all the carts.
     *
     * @return the list of entities.
     */
    List<CartDTO> findAll();


    /**
     * Get the "id" cart.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<CartDTO> findOne(Long id);

    /**
     * Delete the "id" cart.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
