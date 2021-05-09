package com.example.work.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="skills")
public class Skills {
	
	@Id
	private Long id;
	@NotEmpty(message="Not to be an empty")
	private String name;
	@NotEmpty(message="Not to be an Empty")
	private String description;
	@NotEmpty(message="Not to be an Empty")
	private String level;
	@NotEmpty(message="Not to be an Empty")
	private Long user_id;
	
	public Long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

}
