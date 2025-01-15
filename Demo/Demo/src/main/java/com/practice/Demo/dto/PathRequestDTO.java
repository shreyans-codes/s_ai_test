package com.practice.Demo.dto;

import com.practice.Demo.model.Coordinates;
import lombok.*;

@Builder
public class PathRequestDTO {
    private Coordinates start;
    private Coordinates end;

    public Coordinates getStart() {
        return start;
    }

    public void setStart(Coordinates start) {
        this.start = start;
    }

    public Coordinates getEnd() {
        return end;
    }

    public void setEnd(Coordinates end) {
        this.end = end;
    }

    public PathRequestDTO() {
    }

    public PathRequestDTO(Coordinates start, Coordinates end) {
        this.start = start;
        this.end = end;
    }
}
