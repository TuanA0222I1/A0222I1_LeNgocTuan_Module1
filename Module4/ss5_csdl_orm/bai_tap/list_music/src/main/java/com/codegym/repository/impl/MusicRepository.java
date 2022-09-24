package com.codegym.repository.impl;

import com.codegym.models.Music;
import com.codegym.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public class MusicRepository implements IBaseRepository<Music> {
    String findAllMusic = "select m from Music as m";
    String findById = "select m from Music as m where m.id = :id";
    String findByName = "select m from Music as m where m.name like :name";

    @Override
    public List<Music> findAll() {
        TypedQuery<Music> query = BaseRepository.entityManager.createQuery(findAllMusic, Music.class);
        return query.getResultList();
    }

    @Override
    public void addMusic(Music music) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.persist(music);
        entityTransaction.commit();
    }

    @Override
    public void edit(Music music) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.merge(music);
        entityTransaction.commit();
    }

    @Override
    public void delete(int id) {
        EntityTransaction entityTransaction = BaseRepository.entityManager.getTransaction();
        entityTransaction.begin();
        BaseRepository.entityManager.remove(BaseRepository.entityManager.find(Music.class, id));
        entityTransaction.commit();
    }

    @Override
    public Music findById(int id) {
        TypedQuery<Music> query = BaseRepository.entityManager.createQuery(findById, Music.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public List<Music> findByName(String name) {
        TypedQuery<Music> query = BaseRepository.entityManager.createQuery(findByName, Music.class);
        query.setParameter("name", '%' + name + '%');
        return query.getResultList();
    }
}
