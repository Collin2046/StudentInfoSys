package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path="main")
public class StudentController {
    StudentInfoService studentInfoService;
    @Autowired
    public StudentController(StudentInfoService studentInfoService) {
        this.studentInfoService = studentInfoService;
    }


    @GetMapping(path = "/user/getid/{id}")
    public Optional<StudentInfo> gerById(@PathVariable("id") Long id)
    {
        return studentInfoService.getId(id);
    }
    @GetMapping(path = "/user/all")
    public List<StudentInfo> getAll(){return  studentInfoService.getAll();}
    @DeleteMapping(path="/user/delid/{id}")
    public boolean deletById(@PathVariable("id")Long id)
    {
        return studentInfoService.deleteById(id);
    }
    @PostMapping(path = "user/add")
    public boolean addNew(@RequestBody StudentInfo studentInfo)
    {
        return studentInfoService.addNew(studentInfo);
    }
    @PutMapping(path ="user/put")
    public boolean update(@RequestBody StudentInfo studentInfo)
    {
        return studentInfoService.update(studentInfo);
    }
}
