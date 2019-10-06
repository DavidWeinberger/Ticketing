package at.htl.diplproject.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Tickets.
 */
@Entity
@Table(name = "tickets")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tickets implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "ticket_type", nullable = false)
    private String ticketType;

    @NotNull
    @Min(value = 0)
    @Column(name = "price", nullable = false)
    private Integer price;

    @NotNull
    @Min(value = 0)
    @Column(name = "amount", nullable = false)
    private Integer amount;

    @NotNull
    @Column(name = "place", nullable = false)
    private String place;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTicketType() {
        return ticketType;
    }

    public Tickets ticketType(String ticketType) {
        this.ticketType = ticketType;
        return this;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public Integer getPrice() {
        return price;
    }

    public Tickets price(Integer price) {
        this.price = price;
        return this;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getAmount() {
        return amount;
    }

    public Tickets amount(Integer amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getPlace() {
        return place;
    }

    public Tickets place(String place) {
        this.place = place;
        return this;
    }

    public void setPlace(String place) {
        this.place = place;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tickets)) {
            return false;
        }
        return id != null && id.equals(((Tickets) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Tickets{" +
            "id=" + getId() +
            ", ticketType='" + getTicketType() + "'" +
            ", price=" + getPrice() +
            ", amount=" + getAmount() +
            ", place='" + getPlace() + "'" +
            "}";
    }
}
