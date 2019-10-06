package at.htl.diplproject.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Tickets.class)
public abstract class Tickets_ {

	public static volatile SingularAttribute<Tickets, Integer> amount;
	public static volatile SingularAttribute<Tickets, Integer> price;
	public static volatile SingularAttribute<Tickets, String> ticketType;
	public static volatile SingularAttribute<Tickets, Long> id;
	public static volatile SingularAttribute<Tickets, String> place;

	public static final String AMOUNT = "amount";
	public static final String PRICE = "price";
	public static final String TICKET_TYPE = "ticketType";
	public static final String ID = "id";
	public static final String PLACE = "place";

}

