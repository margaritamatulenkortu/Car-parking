package com.selfrequest.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.selfrequest.model.Visitor;
import com.selfrequest.service.VisitorService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import javax.json.Json;
import javax.json.JsonPatchBuilder;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(VisitorController.class)
public class VisitorControllerIntTest {

    private static final Logger logger = LogManager.getLogger(VisitorController.class);

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private VisitorService visitorService;

    //newVisitor
    @Test
    public void newVisitor_WhenPostVisitor_ShouldReturn200() throws Exception {

        Visitor visitor = new Visitor();
        visitor.setName("Test");

        mvc.perform(post("/api/visitors")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(visitor)))
                .andExpect(status().isOk());

    }

    @Test
    public void newVisitor_WhenValidInput_ShouldPassVisitorToService() throws Exception {

        Visitor visitor = new Visitor();

        visitor.setName("Harry Potter");
        visitor.setVisiting("Albus Percival Wulfric Brian Dumbledore");
        visitor.setCompany("Hogwarts");
        visitor.setPhoneNr("123144");
        visitor.setCategory("Wizard");
        visitor.setIsInstructed(true);
        visitor.setAccessCardID("1235145");

        mvc.perform(post("/api/visitors")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(visitor)))
                .andExpect(status().isOk());

        ArgumentCaptor<Visitor> visitorCaptor = ArgumentCaptor.forClass(Visitor.class);

        verify(visitorService,times(1)).saveVisitor(visitorCaptor.capture());
        assertEquals(visitorCaptor.getValue(),visitor);

    }

    @Test
    public void updateVisitor_whenPatchRequest_shouldReturn200() throws Exception {

        Long id = 1L;
        Visitor visitor = new Visitor();
        visitor.setId(id);
        visitorService.saveVisitor(visitor);
        JsonPatchBuilder builder = Json.createPatchBuilder();
        javax.json.JsonPatch patch = builder.replace("/isActive", "false")
                .build();

        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);

        logger.debug(patch.toString());
        mvc.perform(patch("/api/visitors/" + id)
                .contentType("application/json-patch+json")
                .content(patch.toString()))
                .andExpect(status().isOk());
    }


}
