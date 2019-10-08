package at.htl.diplproject.web.rest;

import at.htl.diplproject.TicketingProjectApp;
import at.htl.diplproject.domain.TabletView;
import at.htl.diplproject.repository.TabletViewRepository;
import at.htl.diplproject.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static at.htl.diplproject.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link TabletViewResource} REST controller.
 */
@SpringBootTest(classes = TicketingProjectApp.class)
public class TabletViewResourceIT {

    @Autowired
    private TabletViewRepository tabletViewRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restTabletViewMockMvc;

    private TabletView tabletView;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TabletViewResource tabletViewResource = new TabletViewResource(tabletViewRepository);
        this.restTabletViewMockMvc = MockMvcBuilders.standaloneSetup(tabletViewResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TabletView createEntity(EntityManager em) {
        TabletView tabletView = new TabletView();
        return tabletView;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TabletView createUpdatedEntity(EntityManager em) {
        TabletView tabletView = new TabletView();
        return tabletView;
    }

    @BeforeEach
    public void initTest() {
        tabletView = createEntity(em);
    }

    @Test
    @Transactional
    public void createTabletView() throws Exception {
        int databaseSizeBeforeCreate = tabletViewRepository.findAll().size();

        // Create the TabletView
        restTabletViewMockMvc.perform(post("/api/tablet-views")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tabletView)))
            .andExpect(status().isCreated());

        // Validate the TabletView in the database
        List<TabletView> tabletViewList = tabletViewRepository.findAll();
        assertThat(tabletViewList).hasSize(databaseSizeBeforeCreate + 1);
        TabletView testTabletView = tabletViewList.get(tabletViewList.size() - 1);
    }

    @Test
    @Transactional
    public void createTabletViewWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = tabletViewRepository.findAll().size();

        // Create the TabletView with an existing ID
        tabletView.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTabletViewMockMvc.perform(post("/api/tablet-views")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tabletView)))
            .andExpect(status().isBadRequest());

        // Validate the TabletView in the database
        List<TabletView> tabletViewList = tabletViewRepository.findAll();
        assertThat(tabletViewList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllTabletViews() throws Exception {
        // Initialize the database
        tabletViewRepository.saveAndFlush(tabletView);

        // Get all the tabletViewList
        restTabletViewMockMvc.perform(get("/api/tablet-views?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tabletView.getId().intValue())));
    }
    
    @Test
    @Transactional
    public void getTabletView() throws Exception {
        // Initialize the database
        tabletViewRepository.saveAndFlush(tabletView);

        // Get the tabletView
        restTabletViewMockMvc.perform(get("/api/tablet-views/{id}", tabletView.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tabletView.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTabletView() throws Exception {
        // Get the tabletView
        restTabletViewMockMvc.perform(get("/api/tablet-views/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTabletView() throws Exception {
        // Initialize the database
        tabletViewRepository.saveAndFlush(tabletView);

        int databaseSizeBeforeUpdate = tabletViewRepository.findAll().size();

        // Update the tabletView
        TabletView updatedTabletView = tabletViewRepository.findById(tabletView.getId()).get();
        // Disconnect from session so that the updates on updatedTabletView are not directly saved in db
        em.detach(updatedTabletView);

        restTabletViewMockMvc.perform(put("/api/tablet-views")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTabletView)))
            .andExpect(status().isOk());

        // Validate the TabletView in the database
        List<TabletView> tabletViewList = tabletViewRepository.findAll();
        assertThat(tabletViewList).hasSize(databaseSizeBeforeUpdate);
        TabletView testTabletView = tabletViewList.get(tabletViewList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTabletView() throws Exception {
        int databaseSizeBeforeUpdate = tabletViewRepository.findAll().size();

        // Create the TabletView

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTabletViewMockMvc.perform(put("/api/tablet-views")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tabletView)))
            .andExpect(status().isBadRequest());

        // Validate the TabletView in the database
        List<TabletView> tabletViewList = tabletViewRepository.findAll();
        assertThat(tabletViewList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTabletView() throws Exception {
        // Initialize the database
        tabletViewRepository.saveAndFlush(tabletView);

        int databaseSizeBeforeDelete = tabletViewRepository.findAll().size();

        // Delete the tabletView
        restTabletViewMockMvc.perform(delete("/api/tablet-views/{id}", tabletView.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TabletView> tabletViewList = tabletViewRepository.findAll();
        assertThat(tabletViewList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TabletView.class);
        TabletView tabletView1 = new TabletView();
        tabletView1.setId(1L);
        TabletView tabletView2 = new TabletView();
        tabletView2.setId(tabletView1.getId());
        assertThat(tabletView1).isEqualTo(tabletView2);
        tabletView2.setId(2L);
        assertThat(tabletView1).isNotEqualTo(tabletView2);
        tabletView1.setId(null);
        assertThat(tabletView1).isNotEqualTo(tabletView2);
    }
}
