package at.htl.diplproject.service.dto;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link at.htl.diplproject.domain.Tickets} entity.
 */
public class TicketsDTO implements Serializable {

    private Long id;

    @NotNull
    private String ticketType;

    @NotNull
    @Min(value = 0)
    private Integer price;

    @NotNull
    @Min(value = 0)
    private Integer amount;

    @NotNull
    private String place;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTicketType() {
        return ticketType;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        TicketsDTO ticketsDTO = (TicketsDTO) o;
        if (ticketsDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ticketsDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TicketsDTO{" +
            "id=" + getId() +
            ", ticketType='" + getTicketType() + "'" +
            ", price=" + getPrice() +
            ", amount=" + getAmount() +
            ", place='" + getPlace() + "'" +
            "}";
    }
}
