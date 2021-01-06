package com.kamanalysis;

import org.springframework.data.annotation.Id;

public class Strategy {

	@Id
	private String id;
	private String idea;

	public Strategy() {
		super();
	}

	public Strategy(String idea) {
		super();
		this.idea = idea;
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

	@Override
	public String toString() {
		return "Strategy [id=" + id + ", idea=" + idea + "]";
	}

}
