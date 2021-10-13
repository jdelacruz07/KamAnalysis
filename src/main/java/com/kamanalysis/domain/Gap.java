package com.kamanalysis.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Gap {
	
	@Id
	String id;
	String isClose;
	Date dateSelected;

	public Gap() {
		super();
	}

	public Gap(String isClose, Date dateSelected) {
		super();
		this.isClose = isClose;
		this.dateSelected = dateSelected;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIsClose() {
		return isClose;
	}

	public void setIsClose(String gapClose) {
		this.isClose = gapClose;
	}

	public Date getDateSelected() {
		return dateSelected;
	}

	public void setDateSelected(Date dateSelected) {
		this.dateSelected = dateSelected;
	}

	@Override
	public String toString() {
		return "Gap [gapClose=" + isClose + ", dateSelected=" + dateSelected + "]";
	}

}
