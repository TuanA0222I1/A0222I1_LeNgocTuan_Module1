package com.codegym.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;

public class MusicDTO {
    int id;
    String name;
    String singer;
    int typeMusicId;
    MultipartFile linkMusic;

    public MusicDTO() {
    }

    public MusicDTO(Music music) {
        this.id = music.getId();
        this.name = music.getName();
        this.singer = music.getSinger();
        this.typeMusicId = music.getTypeMusicId();
    }

    public MusicDTO(String name, String singer, int typeMusicId, MultipartFile linkMusic) {
        this.name = name;
        this.singer = singer;
        this.typeMusicId = typeMusicId;
        this.linkMusic = linkMusic;
    }

    public MusicDTO(int id, String name, String singer, int typeMusicId, MultipartFile linkMusic) {
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

    public MultipartFile getLinkMusic() {
        return linkMusic;
    }

    public void setLinkMusic(MultipartFile linkMusic) {
        this.linkMusic = linkMusic;
    }
}
