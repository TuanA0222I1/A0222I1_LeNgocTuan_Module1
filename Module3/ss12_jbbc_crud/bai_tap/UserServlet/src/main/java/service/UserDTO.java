package service;

import models.User;

import java.util.List;

public interface UserDTO {
    User searchUser(int id);

    void insertUser(User user);

    boolean deleteUser(int id);

    boolean updateUser(User user);

    List<User> getListUser();
}
