package com.cts.training.service;

import java.util.Optional;

//import java.util.List;

import com.cts.training.bean.Customer;

public interface CustomerService {

	boolean saveCustomer(Customer customer);
	Customer findByUsername(String username);
	boolean deleteCustomer(Long id);
	public Customer updateCustomer(Customer customer);
	Optional<Customer> findById(Long id);
}
