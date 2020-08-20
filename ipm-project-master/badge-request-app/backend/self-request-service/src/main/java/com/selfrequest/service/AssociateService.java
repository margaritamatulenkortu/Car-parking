package com.selfrequest.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.selfrequest.exception.AssociateNotFoundException;
import com.selfrequest.model.AssociateModelAssembler;
import com.selfrequest.model.Associate;
import com.selfrequest.repository.AssociateRepository;
import org.springframework.hateoas.EntityModel;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssociateService {

    private final AssociateRepository repository;
    private final AssociateModelAssembler assembler;

    AssociateService(AssociateRepository repository, AssociateModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }

    /**
     * Gets associates from the repository, builds models for them
     *
     * @return associate model list
     */
    public List<EntityModel<Associate>> getAssociates() {

        return repository.findAll().stream() //
                .map(assembler::toModel) //
                .collect(Collectors.toList());

    }

    /**
     * Saves a visitor into the repository
     *
     * @param newAssociate
     * @return associates
     */
    public Associate saveAssociate(Associate newAssociate) {

       LocalDateTime currentDate = LocalDateTime.now();
        newAssociate.setDateTimeCreated(currentDate);
        newAssociate.setActive(true);
        return repository.save(newAssociate);
    }


    public Associate findAssociate(Long id) {
        Associate associate = repository.findById(id) //
                .orElseThrow(() -> new AssociateNotFoundException(id));

        return associate;
    }

    public Associate updateAssociate(Associate updatedAssociate) {
        return repository.save(updatedAssociate);
    }
    /**
     * Applies json patch to an associate to change something in the visitor
     *
     * @param patch
     * @param targetAssociate
     * @return patched associate
     * @throws JsonPatchException
     * @throws JsonProcessingException
     */

    public Associate applyPatchToAssociate(JsonPatch patch, Associate targetAssociate) throws JsonPatchException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        JsonNode patched = patch.apply(objectMapper.convertValue(targetAssociate, JsonNode.class));
        return objectMapper.treeToValue(patched, Associate.class);
    }
}
