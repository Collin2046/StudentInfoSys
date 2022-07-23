package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ClientRepository extends JpaRepository <Client,String>{
    Client findByAccount(String account);
    List<Client> findById(Long id);
}

