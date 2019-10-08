package at.htl.diplproject.web.rest;

import at.htl.diplproject.domain.TabletView;
import at.htl.diplproject.repository.TabletViewRepository;
import at.htl.diplproject.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link at.htl.diplproject.domain.TabletView}.
 */
@RestController
@RequestMapping("/api")
public class TabletViewResource {

    private final Logger log = LoggerFactory.getLogger(TabletViewResource.class);

    private static final String ENTITY_NAME = "tabletView";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TabletViewRepository tabletViewRepository;

    public TabletViewResource(TabletViewRepository tabletViewRepository) {
        this.tabletViewRepository = tabletViewRepository;
    }

    /**
     * {@code POST  /tablet-views} : Create a new tabletView.
     *
     * @param tabletView the tabletView to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new tabletView, or with status {@code 400 (Bad Request)} if the tabletView has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/tablet-views")
    public ResponseEntity<TabletView> createTabletView(@RequestBody TabletView tabletView) throws URISyntaxException {
        log.debug("REST request to save TabletView : {}", tabletView);
        if (tabletView.getId() != null) {
            throw new BadRequestAlertException("A new tabletView cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TabletView result = tabletViewRepository.save(tabletView);
        return ResponseEntity.created(new URI("/api/tablet-views/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /tablet-views} : Updates an existing tabletView.
     *
     * @param tabletView the tabletView to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tabletView,
     * or with status {@code 400 (Bad Request)} if the tabletView is not valid,
     * or with status {@code 500 (Internal Server Error)} if the tabletView couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/tablet-views")
    public ResponseEntity<TabletView> updateTabletView(@RequestBody TabletView tabletView) throws URISyntaxException {
        log.debug("REST request to update TabletView : {}", tabletView);
        if (tabletView.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TabletView result = tabletViewRepository.save(tabletView);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, tabletView.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /tablet-views} : get all the tabletViews.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of tabletViews in body.
     */
    @GetMapping("/tablet-views")
    public List<TabletView> getAllTabletViews() {
        log.debug("REST request to get all TabletViews");
        return tabletViewRepository.findAll();
    }

    /**
     * {@code GET  /tablet-views/:id} : get the "id" tabletView.
     *
     * @param id the id of the tabletView to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the tabletView, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/tablet-views/{id}")
    public ResponseEntity<TabletView> getTabletView(@PathVariable Long id) {
        log.debug("REST request to get TabletView : {}", id);
        Optional<TabletView> tabletView = tabletViewRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tabletView);
    }

    /**
     * {@code DELETE  /tablet-views/:id} : delete the "id" tabletView.
     *
     * @param id the id of the tabletView to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/tablet-views/{id}")
    public ResponseEntity<Void> deleteTabletView(@PathVariable Long id) {
        log.debug("REST request to delete TabletView : {}", id);
        tabletViewRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
