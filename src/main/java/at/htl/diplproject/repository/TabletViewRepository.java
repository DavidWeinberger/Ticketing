package at.htl.diplproject.repository;

import at.htl.diplproject.domain.TabletView;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TabletView entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TabletViewRepository extends JpaRepository<TabletView, Long> {

}
