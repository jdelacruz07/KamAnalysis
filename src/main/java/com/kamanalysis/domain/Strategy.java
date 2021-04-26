package com.kamanalysis.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Strategy {

	@Id
	private String id;
	private String asset;
	private String strategy;
	private int price;
	private int stopLoss;
	private int takeProfit;

	private String srcImage;
	private String alt;

	public Strategy() {
	}

	public Strategy(String strategy, String asset, int price, int stopLoss, int takeProfit, String srcImage,
			String alt) {
		super();
		this.strategy = strategy;
		this.asset = asset;
		this.price = price;
		this.stopLoss = stopLoss;
		this.takeProfit = takeProfit;
		this.srcImage = srcImage;
		this.alt = alt;
	}

	public String getAsset() {
		return asset;
	}

	public void setAsset(String asset) {
		this.asset = asset;
	}

	public int getStopLoss() {
		return stopLoss;
	}

	public void setStopLoss(int stopLoss) {
		this.stopLoss = stopLoss;
	}

	public String getId() {
		return id;
	}

	public String getStrategy() {
		return strategy;
	}

	public void setStrategy(String strategy) {
		this.strategy = strategy;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getTakeProfit() {
		return takeProfit;
	}

	public void setTakeProfit(int takeProfit) {
		this.takeProfit = takeProfit;
	}

	public String getSrcImage() {
		return srcImage;
	}

	public void setSrcImage(String srcImage) {
		this.srcImage = srcImage;
	}

	public String getAlt() {
		return alt;
	}

	public void setAlt(String alt) {
		this.alt = alt;
	}

	public void setId(String id) {
		this.id = id;
	}

}
