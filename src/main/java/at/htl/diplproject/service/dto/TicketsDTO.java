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
    @DecimalMin(value = "0")
    private Double price;

    private String place;

    @NotNull
    @Min(value = 0)
    private Integer amount;

    private Integer type;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
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
            ", price=" + getPrice() +
            ", place='" + getPlace() + "'" +
            ", amount=" + getAmount() +
            ", type=" + getType() +
            "}";
    }
}
