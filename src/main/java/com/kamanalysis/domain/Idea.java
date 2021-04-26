package com.kamanalysis.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Idea {

	@Id
	private String id;
	private String idea;
	private String type;

	public Idea() {
		super();
	}

	public Idea(String idea, String type) {
		super();
		this.idea = idea;
		this.type = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIdea() {
		return idea;
	}

	public void setIdea(String idea) {
		this.idea = idea;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Strategy [id=" + id + ", idea=" + idea + ", type=" + type + "]";
	}

}
