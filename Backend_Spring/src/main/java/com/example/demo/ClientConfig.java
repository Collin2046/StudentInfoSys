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
            Client yingjie = new Client("ChaoShi", "20020303","Dr","Ren");
            Client odin = new Client("Yijun ", "1008611","Odin","Yuan");
            Client Vency = new Client("Vency", "123123","Vency","Li");
            Client WangHong = new Client("WangHong", "honghong","Hong","Wang");
            clientRepository.saveAll(List.of(collin,yingjie,odin,Vency,WangHong));
        };
    }
}
