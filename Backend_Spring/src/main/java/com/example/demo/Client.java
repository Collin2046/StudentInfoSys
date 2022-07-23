package com.example.demo;

import javax.persistence.*;


@Entity
@Table(name = "client")
public class Client {
    @Id
    @SequenceGenerator(
            name="client_sequence",
            sequenceName="client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_sequence"
    )
    private Long id;
    private String account;
    private String password;
    private String firstname;
    private String lastname;

    public Client( String account, String password, String firstname, String lastname) {

        this.account = account;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public Client() {}

    public Client(String account, String password) {
        this.account = account;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
