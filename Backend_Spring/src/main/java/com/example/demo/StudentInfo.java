package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name = "studentinfo")
public class StudentInfo {
    @Id
    @SequenceGenerator(
            name="student_sequence",
            sequenceName="student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String name;
    private Integer age;
    private String level;
    private String gpa;

    public StudentInfo(Long id, String name, Integer age, String level, String gpa) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.level = level;
        this.gpa = gpa;
    }

    public StudentInfo() {
    }

    public StudentInfo(String name, Integer age, String level, String gpa) {
        this.name = name;
        this.age = age;
        this.level = level;
        this.gpa = gpa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getGpa() {
        return gpa;
    }

    public void setGpa(String gpa) {
        this.gpa = gpa;
    }
}
