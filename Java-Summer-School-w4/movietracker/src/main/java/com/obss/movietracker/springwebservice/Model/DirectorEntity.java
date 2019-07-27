package com.obss.movietracker.springwebservice.Model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "directors")
public class DirectorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long directorId;

    @Column
    private String name;

    @Column
    private String surname;

    @Column
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date birthDate;

    @Column
    private String birthPlace;

//    @OneToMany(mappedBy = "director", cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    @JsonIgnore
//    private List<MovieEntity> movies;

    public Long getDirectorId() {
        return directorId;
    }

    public void setDirectorId(Long directorId) {
        this.directorId = directorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }
}
