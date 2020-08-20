package com.selfrequest.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.selfrequest.exception.VisitorNotFoundException;
import com.selfrequest.model.Visitor;
import com.selfrequest.model.VisitorModelAssembler;
import com.selfrequest.repository.VisitorRepository;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.hateoas.EntityModel;
import org.springframework.stereotype.Service;

import javax.json.Json;
import javax.json.JsonPatchBuilder;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VisitorService {

    private final VisitorRepository repository;
    private final VisitorModelAssembler assembler;

    private static final Logger logger = LogManager.getLogger(VisitorService.class);

    VisitorService(VisitorRepository repository, VisitorModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }

    /**
     * Gets visitors from the repository, builds models for them
     *
     * @return visitor model list
     */
    public List<EntityModel<Visitor>> getVisitors() {

            return repository.findAll().stream() //
                    .map(assembler::toModel) //
                    .collect(Collectors.toList());

    }

    public List<EntityModel<Visitor>> getVisitorsByActive(boolean active) {
        return repository.findByIsActive(active).stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());
    }


    /**
     * Gets one visitor from the repository by id, builds a model
     *
     * @param id
     * @return visitor model
     */
    public EntityModel<Visitor> getVisitor(Long id) {
        Visitor visitor = repository.findById(id) //
                .orElseThrow(() -> new VisitorNotFoundException(id));

        return assembler.toModel(visitor);
    }

    /**
     * Finds one visitor from the repository by id and returns it
     *
     * @param id
     * @return visitor
     */
    public Visitor findVisitor(Long id) {
        Visitor visitor = repository.findById(id) //
                .orElseThrow(() -> new VisitorNotFoundException(id));

        return visitor;
    }

    /**
     * Saves a visitor into the repository
     *
     * @param newVisitor
     * @return visitor
     */
    public Visitor saveVisitor(Visitor newVisitor) {

        LocalDateTime currentDate = LocalDateTime.now();
        newVisitor.setDateTimeCreated(currentDate);
        newVisitor.setActive(true);
        return repository.save(newVisitor);
    }

    /**
     * Rewrites a visitor in repository with updatedVisitor
     *
     * @param updatedVisitor
     * @return
     */
    public Visitor updateVisitor(Visitor updatedVisitor) {
        return repository.save(updatedVisitor);
    }

    /**
     * Applies json patch to a visitor to change something in the visitor
     *
     * @param patch
     * @param targetVisitor
     * @return patched visitor
     * @throws JsonPatchException
     * @throws JsonProcessingException
     */
    public Visitor applyPatchToVisitor(JsonPatch patch, Visitor targetVisitor) throws JsonPatchException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        JsonNode patched = patch.apply(objectMapper.convertValue(targetVisitor, JsonNode.class));
        return objectMapper.treeToValue(patched, Visitor.class);
    }


}
