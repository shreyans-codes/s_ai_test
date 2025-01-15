package com.practice.Demo.service;

import com.practice.Demo.model.Coordinates;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@Service
public class Compute {
    int maxNum = 20;

    private static final int[][] directions = {
            {0, 1},
            {1, 0},
            {0, -1},
            {-1, 0}
    };
    List<Coordinates> matrix = new ArrayList<>();


    public void setMatrix() {
        for(int i=0;i<maxNum;i++) {
            for (int j=0;j<maxNum;j++) {
                matrix.add(new Coordinates(i+1, j+1));
            }
        }
    }

    public Boolean isValid(int x, int y, boolean[][] visited) {
        if(x<0 || x>=maxNum)
            return false;
        if(y<0 || y>=maxNum)
            return false;
        return !visited[x][y];
    }

    public List<Coordinates> performDFS(Coordinates start, Coordinates end) {
        setMatrix();
        Stack<Coordinates> stack = new Stack<>();
        List<Coordinates> path = new ArrayList<>();
        stack.push(start);
        path.add(start);
        boolean[][] visited = new boolean[maxNum][maxNum];
        while (!stack.empty()) {
            Coordinates current = stack.pop();
            if(!isValid(current.getX(), current.getY(), visited))
                continue;
            visited[current.getX()][current.getY()] = true;

            if(end.getX() > current.getX()) {
                int newX = current.getX() + 1;
                int newY = current.getY();

                if(newX == end.getX() && newY == end.getY()) {
                    path.add(new Coordinates(newX, newY));
                    return path;
                }
                if(isValid(newX, newY, visited)) {

                    stack.push(new Coordinates(newX, newY));

                    path.add(new Coordinates(newX, newY));
                }
            } else if(end.getY() > current.getY()) {
                int newX = current.getX();
                int newY = current.getY() + 1;

                if(newX == end.getX() && newY == end.getY()) {
                    path.add(new Coordinates(newX, newY));
                    return path;
                }
                if(isValid(newX, newY, visited)) {
                    stack.push(new Coordinates(newX, newY));
                    path.add(new Coordinates(newX, newY));
                }
            }
//
//            for(int i=0;i<4;i++) {
//                int newX = current.getX() + directions[i][0];
//                int newY = current.getY() + directions[i][1];
//
//                if(newX == end.getX() && newY == end.getY()) {
//                    path.add(new Coordinates(newX, newY));
//                    return path;
//                }
//
//                if(newX != current.getX() && newX > end.getX()) {
//                    continue;
//                }
//                if(newY != current.getY() && newY > end.getY()) {
//                    continue;
//                }
//
//            }
        }
        return path;
    }


}
