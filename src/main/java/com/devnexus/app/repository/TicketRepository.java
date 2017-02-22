package com.devnexus.app.repository;

import com.devnexus.app.domain.Ticket;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Ticket entity.
 */
@SuppressWarnings("unused")
public interface TicketRepository extends JpaRepository<Ticket,Long> {

    @Query("select ticket from Ticket ticket where ticket.assignedTo.login = ?#{principal.username}")
    List<Ticket> findByAssignedToIsCurrentUser();

    @Query("select distinct ticket from Ticket ticket left join fetch ticket.labels")
    List<Ticket> findAllWithEagerRelationships();

    @Query("select ticket from Ticket ticket left join fetch ticket.labels where ticket.id =:id")
    Ticket findOneWithEagerRelationships(@Param("id") Long id);

}
