package at.htl.diplproject.web.rest;

import at.htl.diplproject.TicketingProjectApp;
import at.htl.diplproject.domain.Tickets;
import at.htl.diplproject.repository.TicketsRepository;
import at.htl.diplproject.service.TicketsService;
import at.htl.diplproject.service.dto.TicketsDTO;
import at.htl.diplproject.service.mapper.TicketsMapper;
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
 * Integration tests for the {@link TicketsResource} REST controller.
 */
@SpringBootTest(classes = TicketingProjectApp.class)
public class TicketsResourceIT {

    private static final Double DEFAULT_PRICE = 0D;
    private static final Double UPDATED_PRICE = 1D;
    private static final Double SMALLER_PRICE = 0D - 1D;

    private static final String DEFAULT_PLACE = "AAAAAAAAAA";
    private static final String UPDATED_PLACE = "BBBBBBBBBB";

    private static final Integer DEFAULT_TYPE = 1;
    private static final Integer UPDATED_TYPE = 2;
    private static final Integer SMALLER_TYPE = 1 - 1;

    private static final Integer DEFAULT_AMOUNT = 1;
    private static final Integer UPDATED_AMOUNT = 2;
    private static final Integer SMALLER_AMOUNT = 1 - 1;

    private static final Integer DEFAULT_SECTOR_ROWS = 1;
    private static final Integer UPDATED_SECTOR_ROWS = 2;
    private static final Integer SMALLER_SECTOR_ROWS = 1 - 1;

    private static final Integer DEFAULT_SEATS = 1;
    private static final Integer UPDATED_SEATS = 2;
    private static final Integer SMALLER_SEATS = 1 - 1;

    private static final Integer DEFAULT_STATE = 1;
    private static final Integer UPDATED_STATE = 2;
    private static final Integer SMALLER_STATE = 1 - 1;

    @Autowired
    private TicketsRepository ticketsRepository;

    @Autowired
    private TicketsMapper ticketsMapper;

    @Autowired
    private TicketsService ticketsService;

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

    private MockMvc restTicketsMockMvc;

    private Tickets tickets;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TicketsResource ticketsResource = new TicketsResource(ticketsService);
        this.restTicketsMockMvc = MockMvcBuilders.standaloneSetup(ticketsResource)
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
    public static Tickets createEntity(EntityManager em) {
        Tickets tickets = new Tickets()
            .price(DEFAULT_PRICE)
            .place(DEFAULT_PLACE)
            .type(DEFAULT_TYPE)
            .amount(DEFAULT_AMOUNT)
            .sectorRows(DEFAULT_SECTOR_ROWS)
            .seats(DEFAULT_SEATS)
            .state(DEFAULT_STATE);
        return tickets;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Tickets createUpdatedEntity(EntityManager em) {
        Tickets tickets = new Tickets()
            .price(UPDATED_PRICE)
            .place(UPDATED_PLACE)
            .type(UPDATED_TYPE)
            .amount(UPDATED_AMOUNT)
            .sectorRows(UPDATED_SECTOR_ROWS)
            .seats(UPDATED_SEATS)
            .state(UPDATED_STATE);
        return tickets;
    }

    @BeforeEach
    public void initTest() {
        tickets = createEntity(em);
    }

    @Test
    @Transactional
    public void createTickets() throws Exception {
        int databaseSizeBeforeCreate = ticketsRepository.findAll().size();

        // Create the Tickets
        TicketsDTO ticketsDTO = ticketsMapper.toDto(tickets);
        restTicketsMockMvc.perform(post("/api/tickets")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ticketsDTO)))
            .andExpect(status().isCreated());

        // Validate the Tickets in the database
        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeCreate + 1);
        Tickets testTickets = ticketsList.get(ticketsList.size() - 1);
        assertThat(testTickets.getPrice()).isEqualTo(DEFAULT_PRICE);
        assertThat(testTickets.getPlace()).isEqualTo(DEFAULT_PLACE);
        assertThat(testTickets.getType()).isEqualTo(DEFAULT_TYPE);
        assertThat(testTickets.getAmount()).isEqualTo(DEFAULT_AMOUNT);
        assertThat(testTickets.getSectorRows()).isEqualTo(DEFAULT_SECTOR_ROWS);
        assertThat(testTickets.getSeats()).isEqualTo(DEFAULT_SEATS);
        assertThat(testTickets.getState()).isEqualTo(DEFAULT_STATE);
    }

    @Test
    @Transactional
    public void createTicketsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = ticketsRepository.findAll().size();

        // Create the Tickets with an existing ID
        tickets.setId(1L);
        TicketsDTO ticketsDTO = ticketsMapper.toDto(tickets);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTicketsMockMvc.perform(post("/api/tickets")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ticketsDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Tickets in the database
        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkPriceIsRequired() throws Exception {
        int databaseSizeBeforeTest = ticketsRepository.findAll().size();
        // set the field null
        tickets.setPrice(null);

        // Create the Tickets, which fails.
        TicketsDTO ticketsDTO = ticketsMapper.toDto(tickets);

        restTicketsMockMvc.perform(post("/api/tickets")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ticketsDTO)))
            .andExpect(status().isBadRequest());

        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllTickets() throws Exception {
        // Initialize the database
        ticketsRepository.saveAndFlush(tickets);

        // Get all the ticketsList
        restTicketsMockMvc.perform(get("/api/tickets?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tickets.getId().intValue())))
            .andExpect(jsonPath("$.[*].price").value(hasItem(DEFAULT_PRICE.doubleValue())))
            .andExpect(jsonPath("$.[*].place").value(hasItem(DEFAULT_PLACE.toString())))
            .andExpect(jsonPath("$.[*].type").value(hasItem(DEFAULT_TYPE)))
            .andExpect(jsonPath("$.[*].amount").value(hasItem(DEFAULT_AMOUNT)))
            .andExpect(jsonPath("$.[*].sectorRows").value(hasItem(DEFAULT_SECTOR_ROWS)))
            .andExpect(jsonPath("$.[*].seats").value(hasItem(DEFAULT_SEATS)))
            .andExpect(jsonPath("$.[*].state").value(hasItem(DEFAULT_STATE)));
    }
    
    @Test
    @Transactional
    public void getTickets() throws Exception {
        // Initialize the database
        ticketsRepository.saveAndFlush(tickets);

        // Get the tickets
        restTicketsMockMvc.perform(get("/api/tickets/{id}", tickets.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tickets.getId().intValue()))
            .andExpect(jsonPath("$.price").value(DEFAULT_PRICE.doubleValue()))
            .andExpect(jsonPath("$.place").value(DEFAULT_PLACE.toString()))
            .andExpect(jsonPath("$.type").value(DEFAULT_TYPE))
            .andExpect(jsonPath("$.amount").value(DEFAULT_AMOUNT))
            .andExpect(jsonPath("$.sectorRows").value(DEFAULT_SECTOR_ROWS))
            .andExpect(jsonPath("$.seats").value(DEFAULT_SEATS))
            .andExpect(jsonPath("$.state").value(DEFAULT_STATE));
    }

    @Test
    @Transactional
    public void getNonExistingTickets() throws Exception {
        // Get the tickets
        restTicketsMockMvc.perform(get("/api/tickets/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTickets() throws Exception {
        // Initialize the database
        ticketsRepository.saveAndFlush(tickets);

        int databaseSizeBeforeUpdate = ticketsRepository.findAll().size();

        // Update the tickets
        Tickets updatedTickets = ticketsRepository.findById(tickets.getId()).get();
        // Disconnect from session so that the updates on updatedTickets are not directly saved in db
        em.detach(updatedTickets);
        updatedTickets
            .price(UPDATED_PRICE)
            .place(UPDATED_PLACE)
            .type(UPDATED_TYPE)
            .amount(UPDATED_AMOUNT)
            .sectorRows(UPDATED_SECTOR_ROWS)
            .seats(UPDATED_SEATS)
            .state(UPDATED_STATE);
        TicketsDTO ticketsDTO = ticketsMapper.toDto(updatedTickets);

        restTicketsMockMvc.perform(put("/api/tickets")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ticketsDTO)))
            .andExpect(status().isOk());

        // Validate the Tickets in the database
        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeUpdate);
        Tickets testTickets = ticketsList.get(ticketsList.size() - 1);
        assertThat(testTickets.getPrice()).isEqualTo(UPDATED_PRICE);
        assertThat(testTickets.getPlace()).isEqualTo(UPDATED_PLACE);
        assertThat(testTickets.getType()).isEqualTo(UPDATED_TYPE);
        assertThat(testTickets.getAmount()).isEqualTo(UPDATED_AMOUNT);
        assertThat(testTickets.getSectorRows()).isEqualTo(UPDATED_SECTOR_ROWS);
        assertThat(testTickets.getSeats()).isEqualTo(UPDATED_SEATS);
        assertThat(testTickets.getState()).isEqualTo(UPDATED_STATE);
    }

    @Test
    @Transactional
    public void updateNonExistingTickets() throws Exception {
        int databaseSizeBeforeUpdate = ticketsRepository.findAll().size();

        // Create the Tickets
        TicketsDTO ticketsDTO = ticketsMapper.toDto(tickets);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTicketsMockMvc.perform(put("/api/tickets")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(ticketsDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Tickets in the database
        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteTickets() throws Exception {
        // Initialize the database
        ticketsRepository.saveAndFlush(tickets);

        int databaseSizeBeforeDelete = ticketsRepository.findAll().size();

        // Delete the tickets
        restTicketsMockMvc.perform(delete("/api/tickets/{id}", tickets.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Tickets> ticketsList = ticketsRepository.findAll();
        assertThat(ticketsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Tickets.class);
        Tickets tickets1 = new Tickets();
        tickets1.setId(1L);
        Tickets tickets2 = new Tickets();
        tickets2.setId(tickets1.getId());
        assertThat(tickets1).isEqualTo(tickets2);
        tickets2.setId(2L);
        assertThat(tickets1).isNotEqualTo(tickets2);
        tickets1.setId(null);
        assertThat(tickets1).isNotEqualTo(tickets2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TicketsDTO.class);
        TicketsDTO ticketsDTO1 = new TicketsDTO();
        ticketsDTO1.setId(1L);
        TicketsDTO ticketsDTO2 = new TicketsDTO();
        assertThat(ticketsDTO1).isNotEqualTo(ticketsDTO2);
        ticketsDTO2.setId(ticketsDTO1.getId());
        assertThat(ticketsDTO1).isEqualTo(ticketsDTO2);
        ticketsDTO2.setId(2L);
        assertThat(ticketsDTO1).isNotEqualTo(ticketsDTO2);
        ticketsDTO1.setId(null);
        assertThat(ticketsDTO1).isNotEqualTo(ticketsDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(ticketsMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(ticketsMapper.fromId(null)).isNull();
    }
}
