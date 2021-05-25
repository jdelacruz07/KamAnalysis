package com.kamanalysis.domain;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Strategy {

	@Id
	private String id;
	private String asset;
	private String market;
	private String position;
	private String strategy;

	private double buySell;
	private double stopLoss;
	private double takeProfit;

	private String urlImg;
	private String altImg;

	@CreatedDate
	private Date createdAt;
	
	

	public Strategy() {
		super();
	}

	public Strategy(String asset, String market, String position, String strategy, double buySell, double stopLoss,
			double takeProfit, String urlImg, String altImg) {
		super();
		this.asset = asset;
		this.market = market;
		this.position = position;
		this.strategy = strategy;
		this.buySell = buySell;
		this.stopLoss = stopLoss;
		this.takeProfit = takeProfit;
		this.urlImg = urlImg;
		this.altImg = altImg;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAsset() {
		return asset;
	}

	public void setAsset(String asset) {
		this.asset = asset;
	}

	public String getMarket() {
		return market;
	}

	public void setMarket(String market) {
		this.market = market;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getStrategy() {
		return strategy;
	}

	public void setStrategy(String strategy) {
		this.strategy = strategy;
	}

	public double getBuySell() {
		return buySell;
	}

	public void setBuySell(double buySell) {
		this.buySell = buySell;
	}

	public double getStopLoss() {
		return stopLoss;
	}

	public void setStopLoss(double stopLoss) {
		this.stopLoss = stopLoss;
	}

	public double getTakeProfit() {
		return takeProfit;
	}

	public void setTakeProfit(double takeProfit) {
		this.takeProfit = takeProfit;
	}

	public String getUrlImg() {
		return urlImg;
	}

	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}

	public String getAltImg() {
		return altImg;
	}

	public void setAltImg(String altImg) {
		this.altImg = altImg;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	

}
