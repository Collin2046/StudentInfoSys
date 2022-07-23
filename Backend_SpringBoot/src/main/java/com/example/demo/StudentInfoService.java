package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class StudentInfoService {
    StudentInfoRepository studentInfoRepository;
    @Autowired
    public StudentInfoService(StudentInfoRepository studentInfoRepository) {
        this.studentInfoRepository = studentInfoRepository;
    }

    public Optional<StudentInfo> getId(Long id) {
        return studentInfoRepository.findById(id);
    }

    public boolean deleteById(Long id) {
        Optional<StudentInfo>agent= studentInfoRepository.findById(id);
        if(!agent.isPresent())
        {
            return false;
        }
        else {
            studentInfoRepository.deleteById(id);
            return true;
        }
    }

    public boolean addNew(StudentInfo studentInfo) {
        StudentInfo newOne=new StudentInfo(studentInfo.getName(),studentInfo.getAge(),studentInfo.getLevel(),studentInfo.getGpa());
        studentInfoRepository.save(newOne);
        return true;
    }

    public boolean update(StudentInfo studentInfo) {
        Optional<StudentInfo>agent= studentInfoRepository.findById(studentInfo.getId());
        if(!agent.isPresent())
        {
            return false;
        }
        else {
            StudentInfo update=new StudentInfo(studentInfo.getId(),studentInfo.getName(),studentInfo.getAge(),studentInfo.getLevel(),studentInfo.getGpa());
            studentInfoRepository.save(update);
            return true;
        }
    }

    public List<StudentInfo> getAll() {
        return studentInfoRepository.findAll();
    }
}
