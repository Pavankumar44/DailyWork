package com.example.work.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.work.bean.Skills;

public interface SkillRepository extends JpaRepository<Skills, Long> {
	
	Optional<Skills> findByName(String name);

	List<Skills> findByDescription(String Description);
	List<Skills> findByLevel(String Level);

}
