package com.cts.training.controller;



import java.util.List;
import java.util.Optional;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.bean.Customer;
import com.cts.training.repository.CustomerRepository;
import com.cts.training.service.CustomerService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class CustomerRestController {

	@Autowired
	private CustomerService customerService;
	@Autowired
	private CustomerRepository customerRepository;
    
	
	
	@GetMapping("/customers")
	public List<Customer> getAllSkills() {
		
		return customerRepository.findAll();
	}
	// http://localhost:8800/api/customer
	@PostMapping("/customers")
	public ResponseEntity<?> saveCustomer(@RequestBody Customer customer) {
		if (customer != null) {
			customerService.saveCustomer(customer);
			return new ResponseEntity<>(customer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("No Customer Found", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/customers/{id}")
	public ResponseEntity<?> getCustomerById(@PathVariable Long id) {
		if (id != null) {
			Optional<Customer> cust = customerService.findById(id);

			return new ResponseEntity<>(cust, HttpStatus.OK);

		} else {
			return new ResponseEntity<>("Not Cusromer found with username " + id, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<?> deleteCustomerById(@PathVariable Long id) {
		if (id != null) {
			customerService.deleteCustomer(id);

			return new ResponseEntity<>("Customer deleted Successfully", HttpStatus.OK);

		} else {
			return new ResponseEntity<>("Not Id found " + id, HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/customers/{id}")
	public ResponseEntity<Optional<Customer>> updateCustomer(@PathVariable Long id , @RequestBody Customer customer) {
		Optional<Customer> cust = customerService.findById(id);
		if (cust != null) {
			customerService.updateCustomer(customer);

			return new ResponseEntity<>(cust, HttpStatus.OK);

		} else {
			return new ResponseEntity<>(cust, HttpStatus.NOT_FOUND);
		}
	}

}
