package at.htl.diplproject.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * A Cart.
 */
@Entity
@Table(name = "cart")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Cart implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "ticket_id", nullable = false)
    private Integer ticketId;

    @NotNull
    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @NotNull
    @Column(name = "time", nullable = false)
    private ZonedDateTime time;

    @OneToOne
    @JoinColumn(unique = true)
    private JHI_USER jHI_USER;

    @ManyToOne
    private TICKETS tICKETS;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getTicketId() {
        return ticketId;
    }

    public Cart ticketId(Integer ticketId) {
        this.ticketId = ticketId;
        return this;
    }

    public void setTicketId(Integer ticketId) {
        this.ticketId = ticketId;
    }

    public Integer getUserId() {
        return userId;
    }

    public Cart userId(Integer userId) {
        this.userId = userId;
        return this;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public ZonedDateTime getTime() {
        return time;
    }

    public Cart time(ZonedDateTime time) {
        this.time = time;
        return this;
    }

    public void setTime(ZonedDateTime time) {
        this.time = time;
    }

    public JHI_USER getJHI_USER() {
        return jHI_USER;
    }

    public Cart jHI_USER(JHI_USER jHI_USER) {
        this.jHI_USER = jHI_USER;
        return this;
    }

    public void setJHI_USER(JHI_USER jHI_USER) {
        this.jHI_USER = jHI_USER;
    }

    public TICKETS getTICKETS() {
        return tICKETS;
    }

    public Cart tICKETS(TICKETS tICKETS) {
        this.tICKETS = tICKETS;
        return this;
    }

    public void setTICKETS(TICKETS tICKETS) {
        this.tICKETS = tICKETS;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cart)) {
            return false;
        }
        return id != null && id.equals(((Cart) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Cart{" +
            "id=" + getId() +
            ", ticketId=" + getTicketId() +
            ", userId=" + getUserId() +
            ", time='" + getTime() + "'" +
            "}";
    }
}
