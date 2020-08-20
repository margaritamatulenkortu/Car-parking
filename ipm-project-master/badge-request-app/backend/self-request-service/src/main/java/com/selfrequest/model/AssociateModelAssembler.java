package com.selfrequest.model;

import com.selfrequest.controller.VisitorController;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class AssociateModelAssembler implements RepresentationModelAssembler<Associate, EntityModel<Associate>> {

    /**
     * Creates a model out of a visitor by adding links to self and to the root aggregator
     *
     * @param associate
     * @return visitor model
     */
    @Override
    public EntityModel<Associate> toModel(Associate associate) {
        return EntityModel.of(associate, //
                linkTo(methodOn(VisitorController.class).one(associate.getId())).withSelfRel(),
                linkTo(methodOn(VisitorController.class).all(null)).withRel("associate"));
    }

}
