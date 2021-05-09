package com.example.work.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.work.bean.Skills;
import com.example.work.exception.SkillsNotFoundException;
import com.example.work.repository.SkillRepository;


@RestController
@RequestMapping("/api")
public class SkillController {
	
	@Autowired
	private SkillRepository skillRepository;
	
	@GetMapping("/skills")
	public List<Skills> getAllSkills() {
		
		return skillRepository.findAll();
	}
	
	@GetMapping("/skills/{id}")
	public ResponseEntity<Optional<Skills>> getSkillsById(@PathVariable Long id) {
		
		Optional<Skills> skills = skillRepository.findById(id);
		if(!skills.isPresent()) {
			throw new SkillsNotFoundException("The user with id - "+id+ " does not exists");
		}
		return new ResponseEntity<>(skills, HttpStatus.FOUND);
	}
	
	@GetMapping("/skills/name/{name}")
	public ResponseEntity<Optional<Skills>> getSkillsByName(@PathVariable String name) {
		
		Optional<Skills> skills = skillRepository.findByName(name);
		return new ResponseEntity<>(skills, HttpStatus.FOUND); 
	}
	
	@GetMapping("/skills/description/{description}")
	public List<Skills> getSkillsByDescription(@PathVariable String description) {
		
		List<Skills> skills = skillRepository.findByDescription(description);
		return skills;
	}
	
	@DeleteMapping("/skills/{id}")
	public void deleteSkills(@PathVariable Long id) {
		
		Optional<Skills> skills = skillRepository.findById(id);
		if(!skills.isPresent()) {
			throw new SkillsNotFoundException("The user with id - "+id+ " does not exists");
		}
		
		skillRepository.deleteById(id); 
		
	}
	
	@PostMapping("/skills")
	public Skills createBySkills(@RequestBody Skills skills) {
		
		Skills savedSkills = skillRepository.save(skills);
		return savedSkills;
	}
	
	@PutMapping("/skills/{id}")
	public ResponseEntity<Optional> updateSkills(@RequestBody Skills skills, @PathVariable Long id){
		
		Optional<Skills> updatedSkills = skillRepository.findById(id);
		if(!updatedSkills.isPresent()) {
			throw new SkillsNotFoundException("The user with id - "+id+ " does not exists");
		}
		skillRepository.save(skills);
		return ResponseEntity.noContent().build();
		
	}
	//insert into skills(id,name,description,level,user_id) values(1,'pavan','Core-java','Beginner',1001);
	//insert into skills(id,name,description,level,user_id) values(2,'naveen','Spring','Intermediate',1002);
	//insert into skills(id,name,description,level,user_id) values(3,'vamsi','Python','Expert',1003);
}
