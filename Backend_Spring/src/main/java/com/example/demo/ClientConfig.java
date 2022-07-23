package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ClientConfig {
    @Bean
    CommandLineRunner commandLineRunner(ClientRepository clientRepository) {
        return arg-> {
            Client collin = new Client("collin", "19971225","Kelin","He");
            Client yingjie = new Client("lisi", "20020303");
            Client odin = new Client("wangwu", "1008611");
            Client Vency = new Client("honghong", "123123");
            clientRepository.saveAll(List.of(collin,yingjie,odin,Vency));
        };
    }
}
