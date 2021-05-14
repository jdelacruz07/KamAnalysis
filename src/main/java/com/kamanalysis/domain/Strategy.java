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

	private int buySell;
	private int stopLoss;
	private int takeProfit;

	private String urlImg;
	private String altImg;

	@CreatedDate
	private Date createdAt;

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Strategy() {
	}

	public Strategy(String asset, String market, String position, String strategy, int buySell, int stopLoss,
			int takeProfit, String urlImg, String altImg) {
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

	public String getStrategy() {
		return strategy;
	}

	public void setStrategy(String strategy) {
		this.strategy = strategy;
	}

	public int getBuySell() {
		return buySell;
	}

	public void setBuySell(int buySell) {
		this.buySell = buySell;
	}

	public int getStopLoss() {
		return stopLoss;
	}

	public void setStopLoss(int stopLoss) {
		this.stopLoss = stopLoss;
	}

	public int getTakeProfit() {
		return takeProfit;
	}

	public void setTakeProfit(int takeProfit) {
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

	@Override
	public String toString() {
		return "Strategy [asset=" + asset + ", market=" + market + ", position=" + position + ", strategy=" + strategy
				+ ", buySell=" + buySell + ", stopLoss=" + stopLoss + ", takeProfit=" + takeProfit + ", urlImg="
				+ urlImg + ", altImg=" + altImg + ", createdAt=" + createdAt + "]";
	}

}
