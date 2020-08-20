package com.selfrequest.controller;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.selfrequest.model.Visitor;
import com.selfrequest.service.VisitorService;
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
public class VisitorController {

    private static final Logger logger = LogManager.getLogger(VisitorController.class); //make logs happen

    private final VisitorService service;


    VisitorController(VisitorService service) {

        this.service = service;
    }

    /**
     * Return all visitors and their links
     *
     * @return Visitor object collection w/links + self link
     */

    @GetMapping("/visitors")
    public //curl -v localhost:8080/api/visitors
    CollectionModel<EntityModel<Visitor>> all(@RequestParam(required=false) Boolean active) {

        if(active == null) {
            try {
                List<EntityModel<Visitor>> visitors = service.getVisitors();
                logger.info("Get all visitors request from:");
                return CollectionModel.of(visitors,
                        linkTo(methodOn(VisitorController.class).all(null)).withSelfRel());
            } catch (Exception e) {
                logger.error("Get all visitors request failed: " + e);
                throw e;
            }
        }
        else {
            try {
                List<EntityModel<Visitor>> visitors = service.getVisitorsByActive(active);
                logger.info("Get (un)active visitors request");
                return CollectionModel.of(visitors,
                        linkTo(methodOn(VisitorController.class).all(active)).withSelfRel());
            } catch (Exception e) {
                logger.error("Get active visitors request failed: " + e);
                throw e;
            }
        }

    }

    /**
     * Returns a count of how many entries is in the database
     * @return integer of how many entries in the database
     */
    @GetMapping("/visitors/count")
    public //curl -v localhost:8080/api/visitors
    Integer allCount() {
        try {
            List<EntityModel<Visitor>> visitors = service.getVisitors();
            logger.info("Get all visitors count:" + visitors.size());
            return visitors.size();
        } catch (Exception e) {
            logger.error("Get all visitors count failed: " + e);
            throw e;
        }
    }


    /**
     * Return a certain visitor by id
     *
     * @param id visitor's id value
     * @return Visitor model
     */
    @GetMapping("/visitors/{id}")
    public EntityModel<Visitor> one(@PathVariable Long id) {
        try {
            logger.info("Requested visitor with ID" + id);
            return service.getVisitor(id);

        } catch (Exception e) {
            logger.error("Get one visitor request failed: " +e);
            throw e;
        }

    }


    /**
     * Insert a new visitor into the DB
     *
     * @param newVisitor
     * @return the new visitor
     */
    @PostMapping("/visitors")
    Visitor newVisitor(@RequestBody Visitor newVisitor) {

        try {
            logger.info("Request to create visitor: " + newVisitor);
            return service.saveVisitor(newVisitor);
        } catch (Exception e) {
            logger.error("Request to add one visitor failed: " + e);
            throw e;
        }

    }

    /** Changes a field in a DB record
     *
     * [{"op" : "replace",
     * "patch": "/active", //path to the field to change
     * "value": "false"}] //new value
     *
     * @param id
     * @param patch
     * @return
     * @throws JsonPatchException
     * @throws JsonProcessingException
     */
    @PatchMapping(path = "/visitors/{id}", consumes = "application/json-patch+json")
    public Visitor updateVisitor(@PathVariable Long id, @RequestBody JsonPatch patch) throws JsonPatchException, JsonProcessingException {
        try {
            Visitor visitor = service.findVisitor(id);
            Visitor visitorPatched = service.applyPatchToVisitor(patch, visitor);

            LocalDateTime currentDate = LocalDateTime.now();
            visitorPatched.setDateTimeLeft(currentDate);
            return service.updateVisitor(visitorPatched);
        } catch (Exception e) {
            logger.error("Request to update one visitor failed: " + e);
            throw e;
        }
    }



}
