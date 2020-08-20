package com.selfrequest.model;

import com.selfrequest.controller.VisitorController;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class VisitorModelAssembler implements RepresentationModelAssembler<Visitor, EntityModel<Visitor>> {

    /**
     * Creates a model out of a visitor by adding links to self and to the root aggregator
     * @param visitor
     * @return visitor model
     */
    @Override
    public EntityModel<Visitor> toModel(Visitor visitor) {
        return EntityModel.of(visitor, //
                linkTo(methodOn(VisitorController.class).one(visitor.getId())).withSelfRel(),
                linkTo(methodOn(VisitorController.class).all(null)).withRel("visitors"));
    }

}
