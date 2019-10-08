package at.htl.diplproject.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Cart.class)
public abstract class Cart_ {

	public static volatile SingularAttribute<Cart, Long> id;
	public static volatile SingularAttribute<Cart, ZonedDateTime> time;
	public static volatile SingularAttribute<Cart, Integer> userId;
	public static volatile SingularAttribute<Cart, Integer> ticketId;

	public static final String ID = "id";
	public static final String TIME = "time";
	public static final String USER_ID = "userId";
	public static final String TICKET_ID = "ticketId";

}

