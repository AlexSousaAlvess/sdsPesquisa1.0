package com.devsuperior.dspesquisa.dto;

import java.io.Serializable;
import java.time.Instant;

import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.entities.enums.Platform;

public class RecordDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Instant moment;
	private String name;
	private Integer age;
	private String gameTitle;
	private Platform gamePlatform;
	private String genreName;
	
	public RecordDTO() {
		
	}
	
	public RecordDTO(Record entity) {
		id = entity.getId();
		moment = entity.getMoment();
		name = entity.getname();
		age = entity.getAge();
		gameTitle = entity.getGame().getTitle();
		gamePlatform = entity.getGame().getPlatform();
		genreName = entity.getGame().getGenre().getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGameTitle() {
		return gameTitle;
	}

	public void setGameTitle(String gameTitle) {
		this.gameTitle = gameTitle;
	}

	public Platform getGamePlatform() {
		return gamePlatform;
	}

	public void setGamePlatform(Platform gamePlatform) {
		this.gamePlatform = gamePlatform;
	}

	public String getGenreName() {
		return genreName;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}
	
	
}
