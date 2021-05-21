package com.cts.training.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.bean.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Optional<Customer> findById(Long id);

	List<Customer> findAll();
	
	Customer findByUsername(String username);

	
	
	
}
