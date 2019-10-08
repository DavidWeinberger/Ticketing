package at.htl.diplproject.service.dto;
import java.time.ZonedDateTime;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link at.htl.diplproject.domain.Cart} entity.
 */
public class CartDTO implements Serializable {

    private Long id;

    @NotNull
    private Integer ticketId;

    @NotNull
    private Integer userId;

    @NotNull
    private ZonedDateTime time;


    private Long jHI_USERId;

    private Long tICKETSId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getTicketId() {
        return ticketId;
    }

    public void setTicketId(Integer ticketId) {
        this.ticketId = ticketId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public ZonedDateTime getTime() {
        return time;
    }

    public void setTime(ZonedDateTime time) {
        this.time = time;
    }

    public Long getJHI_USERId() {
        return jHI_USERId;
    }

    public void setJHI_USERId(Long jHI_USERId) {
        this.jHI_USERId = jHI_USERId;
    }

    public Long getTICKETSId() {
        return tICKETSId;
    }

    public void setTICKETSId(Long tICKETSId) {
        this.tICKETSId = tICKETSId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CartDTO cartDTO = (CartDTO) o;
        if (cartDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), cartDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CartDTO{" +
            "id=" + getId() +
            ", ticketId=" + getTicketId() +
            ", userId=" + getUserId() +
            ", time='" + getTime() + "'" +
            ", jHI_USER=" + getJHI_USERId() +
            ", tICKETS=" + getTICKETSId() +
            "}";
    }
}
