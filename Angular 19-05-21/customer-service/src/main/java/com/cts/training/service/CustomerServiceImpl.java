package com.cts.training.service;

import java.util.Optional;

//import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.bean.Customer;
import com.cts.training.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository repository;

	@Override
	public boolean saveCustomer(Customer customer) {
		repository.save(customer);
		return true;
	}

	@Override
	public Customer findByUsername(String username) {
		Customer cust = repository.findByUsername(username);
		return cust;
	}


	@Override
	public boolean deleteCustomer(Long id) {
		
		repository.deleteById(id);
		return true;
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		
		
		return repository.save(customer);
	}

	@Override
	public Optional<Customer> findById(Long id) {
		Optional<Customer> customer = repository.findById(id);
		return customer;
	}

	

	

	

	
	

}
