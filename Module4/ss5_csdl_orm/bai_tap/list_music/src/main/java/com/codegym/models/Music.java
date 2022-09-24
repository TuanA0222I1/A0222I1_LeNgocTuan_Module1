package com.codegym.models;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity

@Table(name = "music")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "name")
    String name;

    @Column(name = "singer")
    String singer;

    @Column(name = "typeMusicId")
    int typeMusicId;

    @Column(name = "linkMusic")
    String linkMusic;

    public Music() {
    }

    public Music(MusicDTO musicDTO) {
        this.name = musicDTO.getName();
        this.singer = musicDTO.getSinger();
        this.typeMusicId = musicDTO.getTypeMusicId();
        this.linkMusic = musicDTO.getLinkMusic().getOriginalFilename();
    }

    public Music(int id, String name, String singer, int typeMusicId, String linkMusic) {
        this.id = id;
        this.name = name;
        this.singer = singer;
        this.typeMusicId = typeMusicId;
        this.linkMusic = linkMusic;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public int getTypeMusicId() {
        return typeMusicId;
    }

    public void setTypeMusicId(int typeMusicId) {
        this.typeMusicId = typeMusicId;
    }

    public String getLinkMusic() {
        return linkMusic;
    }

    public void setLinkMusic(String linkMusic) {
        this.linkMusic = linkMusic;
    }
}
