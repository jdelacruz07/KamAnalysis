package com.kamanalysis.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Gap {
	
	@Id
	String id;
	String gapClose;
	Date dateSelected;

	public Gap() {
		super();
	}

	public Gap(String gapClose, Date dateSelected) {
		super();
		this.gapClose = gapClose;
		this.dateSelected = dateSelected;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getGapClose() {
		return gapClose;
	}

	public void setGapClose(String gapClose) {
		this.gapClose = gapClose;
	}

	public Date getDateSelected() {
		return dateSelected;
	}

	public void setDateSelected(Date dateSelected) {
		this.dateSelected = dateSelected;
	}

	@Override
	public String toString() {
		return "Gap [gapClose=" + gapClose + ", dateSelected=" + dateSelected + "]";
	}

}
