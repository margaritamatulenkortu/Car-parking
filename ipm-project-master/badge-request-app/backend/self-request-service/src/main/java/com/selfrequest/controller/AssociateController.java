package com.selfrequest.controller;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.selfrequest.model.Associate;
import com.selfrequest.service.AssociateService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping("/badge-api")
@CrossOrigin(origins = "*")
public class AssociateController {

    private static final Logger logger = LogManager.getLogger(AssociateController.class); //make logs happen

    private final AssociateService service;


    AssociateController(AssociateService service) {

        this.service = service;
    }

    /**
     * Return all associates and their links
     *
     * @return Associate object collection w/links + self link
     */

    @GetMapping("/associates")
    public CollectionModel<EntityModel<Associate>> all() {
        try {
            List<EntityModel<Associate>> associates = service.getAssociates();
            logger.info("Get all associates request from:");
            return CollectionModel.of(associates,
                    linkTo(methodOn(AssociateController.class).all()).withSelfRel());
        } catch (Exception e) {
            logger.error("Get all associates request failed: " + e);
            throw e;
        }
    }

    /**
     * Returns a count of how many entries is in the database
     *
     * @return integer of how many entries in the database
     */
    @GetMapping("/associates/count")
    public Integer allCount() {
        try {
            List<EntityModel<Associate>> associates = service.getAssociates();
            logger.info("Get all associates count:" + associates.size());
            return associates.size();
        } catch (Exception e) {
            logger.error("Get all associates count failed: " + e);
            throw e;
        }
    }

    /**
     * Insert a new associate into the DB
     *
     * @param newAssociate
     * @return the new associate
     */
    @PostMapping("/associates")
    Associate newAssociate(@RequestBody Associate newAssociate) {

        try {
            logger.info("Request to create associate: " + newAssociate);
            return service.saveAssociate(newAssociate);
        } catch (Exception e) {
            logger.error("Request to add one associate failed: " + e);
            throw e;
        }

    }

    @PatchMapping(path = "/associates/{id}", consumes = "application/json-patch+json")
    public Associate updateAssociate(@PathVariable Long id, @RequestBody JsonPatch patch) throws JsonPatchException, JsonProcessingException {
        try {
            Associate associate = service.findAssociate(id);
            Associate associatePatched = service.applyPatchToAssociate(patch, associate);
            return service.updateAssociate(associatePatched);
        } catch (Exception e) {
            logger.error("Request to update one visitor failed: " + e);
            throw e;
        }
    }

}
