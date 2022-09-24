package com.produce.repository;

import com.produce.models.Produce;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class ProduceRepos implements IProduceRepos<Produce> {
    public static Map<Integer, Produce> list = new HashMap<>();

    static {
        list.put(1, new Produce(1, "Pen", 123, "plastic", "SKYLER"));
        list.put(2, new Produce(2, "Pencil", 234, "black", "DEN"));
        list.put(3, new Produce(3, "Ruler", 345, "blue", "DSK"));
    }

    @Override
    public Produce findById(int id) {
        return list.get(id);
    }

    @Override
    public Map<Integer, Produce> findByName(String name) {
        Map<Integer,Produce> result= new HashMap<>();
        for (Map.Entry<Integer,Produce> entry: list.entrySet()) {
            if(entry.getValue().getName().toLowerCase().contains(name.toLowerCase())){
                result.put(entry.getValue().getId(),entry.getValue());
            }
        }
        return result;
    }

    @Override
    public void removeById(int id) {
        list.remove(id);
    }

    @Override
    public void save(Produce produce) {
        list.put(produce.getId(), produce);
    }

    @Override
    public void update(Produce produce) {
        list.replace(produce.getId(), produce);
    }

    @Override
    public Map<Integer, Produce> findAll() {
        return list;
    }
}
