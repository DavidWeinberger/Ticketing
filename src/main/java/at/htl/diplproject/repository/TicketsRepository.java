package at.htl.diplproject.repository;

import at.htl.diplproject.domain.Tickets;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tickets entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TicketsRepository extends JpaRepository<Tickets, Long> {

}
