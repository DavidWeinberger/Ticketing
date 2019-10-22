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
    @DecimalMin(value = "0")
    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "place")
    private String place;

    @Column(name = "type")
    private Integer type;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "rows")
    private Integer rows;

    @Column(name = "seats")
    private Integer seats;

    @Column(name = "state")
    private Integer state;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public Tickets price(Double price) {
        this.price = price;
        return this;
    }

    public void setPrice(Double price) {
        this.price = price;
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

    public Integer getType() {
        return type;
    }

    public Tickets type(Integer type) {
        this.type = type;
        return this;
    }

    public void setType(Integer type) {
        this.type = type;
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

    public Integer getRows() {
        return rows;
    }

    public Tickets rows(Integer rows) {
        this.rows = rows;
        return this;
    }

    public void setRows(Integer rows) {
        this.rows = rows;
    }

    public Integer getSeats() {
        return seats;
    }

    public Tickets seats(Integer seats) {
        this.seats = seats;
        return this;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public Integer getState() {
        return state;
    }

    public Tickets state(Integer state) {
        this.state = state;
        return this;
    }

    public void setState(Integer state) {
        this.state = state;
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
            ", price=" + getPrice() +
            ", place='" + getPlace() + "'" +
            ", type=" + getType() +
            ", amount=" + getAmount() +
            ", rows=" + getRows() +
            ", seats=" + getSeats() +
            ", state=" + getState() +
            "}";
    }
}
