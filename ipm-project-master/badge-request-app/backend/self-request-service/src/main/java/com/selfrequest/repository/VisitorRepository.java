package com.selfrequest.repository;

import com.selfrequest.model.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface VisitorRepository extends JpaRepository<Visitor, Long> {

    List<Visitor> findByIsActive(boolean isActive);

}
