package com.example.work.exception;


import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;


@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class SkillsNotFoundException extends RuntimeException {
	
	public SkillsNotFoundException(String message) {
		super(message);
	}
}
