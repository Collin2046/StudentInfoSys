package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
@Configuration
public class StudentInfoConfig {
    @Bean
    CommandLineRunner commandLineRunner2(StudentInfoRepository studentInfoRepository) {
        return arg -> {
            StudentInfo collin = new StudentInfo("zhangsan", 24, "master", "3.9");
            StudentInfo odin = new StudentInfo("lisi", 23, "master", "3.8");
            StudentInfo yingjie = new StudentInfo("wangwu", 23, "master", "3.7");
            studentInfoRepository.saveAll(List.of(collin,odin,yingjie));
        };
    }
}
