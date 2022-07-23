package product.mvc.controller;

import product.mvc.models.Produce;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class ProduceController {
    public static Map<Integer, Produce> list;

    static {
        list = new TreeMap<>();
        list.put(1, new Produce(1, "Pen", 10, "Black", "Dragon"));
        list.put(2, new Produce(2, "Pencil", 7, "Red", "Sky"));
    }

    public List<Produce> mapToList() {
        List<Produce> produceList = new ArrayList<>();
        for (Map.Entry<Integer, Produce> entry : list.entrySet()) {
            produceList.add(entry.getValue());
        }
        return produceList;
    }

    public void addNew(Produce produce) {
        list.put(produce.getId(), produce);
    }

    public Produce searchById(int id) {
        return list.get(id);
    }

    public Produce searchByName(String name) {
        for (Map.Entry<Integer, Produce> entry : list.entrySet()) {
            if (entry.getValue().getNameProduce().equalsIgnoreCase(name)) return entry.getValue();
        }
        return null;
    }

    public void removeProduceById(int id) {
        list.remove(id);
    }

    public Produce editProduceById(int id, String name, int price, String other, String manufacturer) {
        return list.get(id).setNameProduce(name).setPrice(price).setOther(other).setManufacturer(manufacturer);
    }
}
