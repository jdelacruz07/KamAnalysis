package com.kamanalysis.domain;

public class Strategy {

	private String id;
	private String strategy;
	private int price;
	private int stopLoss;
	private int takeProfit;

	private String srcImage;
	private String alt;

	public Strategy() {
	}

	public Strategy(String id, String strategy, int price, int stopLoss, int takeProfit, String srcImage, String alt) {
		super();
		this.id = id;
		this.strategy = strategy;
		this.price = price;
		this.stopLoss = stopLoss;
		this.takeProfit = takeProfit;
		this.srcImage = srcImage;
		this.alt = alt;
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
