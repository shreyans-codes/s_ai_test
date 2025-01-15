package com.practice.Demo.controller;

import com.practice.Demo.dto.PathRequestDTO;
import com.practice.Demo.model.Coordinates;
import com.practice.Demo.service.Compute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@CrossOrigin(origins = "*")
public class PathController {

    @Autowired
    Compute compute;

    @PostMapping("/getPath")
    public List<Coordinates> getPath(@RequestBody PathRequestDTO pathRequestDTO) {
        return compute.performDFS(pathRequestDTO.getStart(), pathRequestDTO.getEnd());
    }
}
