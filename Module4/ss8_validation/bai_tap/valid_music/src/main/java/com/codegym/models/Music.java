package com.codegym.models;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class Music {
    @NotBlank(message = "name music shouldn't empty")
    @Length(max = 800, message = "name music must smaller 800 digits")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "name music not special character")
    String nameMusic;

    @NotBlank(message = "name Singer shouldn't empty")
    @Length(max = 300, message = "name Singer must smaller 300 digits")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "name Singer not special character")
    String nameSinger;

    @NotBlank(message = "info music shouldn't empty")
    @Length(max = 1000, message = "info music must smaller 1000 digits")
    @Pattern(regexp = "^[a-zA-Z0-9 ,]+$", message = "info music not special character")
    String infoMusic;

    public Music() {
    }

    public Music(String nameMusic, String nameSinger, String infoMusic) {
        this.nameMusic = nameMusic;
        this.nameSinger = nameSinger;
        this.infoMusic = infoMusic;
    }

    public String getNameMusic() {
        return nameMusic;
    }

    public void setNameMusic(String nameMusic) {
        this.nameMusic = nameMusic;
    }

    public String getNameSinger() {
        return nameSinger;
    }

    public void setNameSinger(String nameSinger) {
        this.nameSinger = nameSinger;
    }

    public String getInfoMusic() {
        return infoMusic;
    }

    public void setInfoMusic(String infoMusic) {
        this.infoMusic = infoMusic;
    }
}
