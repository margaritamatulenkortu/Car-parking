package com.selfrequest.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.selfrequest.model.Associate;
import com.selfrequest.service.AssociateService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;



import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AssociateController.class)
public class AssociateControllerIntTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AssociateService associateService;

    //newAssociate
    @Test
    public void newAssociate_WhenPostAssociate_ShouldReturn200() throws Exception {

        Associate associate = new Associate();

        associate.setAssociateId("888222");

        mvc.perform(post("/api/associates")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(associate)))
                .andExpect(status().isOk());

    }

    @Test
    public void newAssociate_WhenValidInput_ShouldPassAssociateToService() throws Exception {

        Associate associate = new Associate();

        associate.setAssociateId("888666");
        associate.setPhoneNr("123144");
        associate.setAccessCardID("11111");
        associate.setLaptopNr("26357645");
        associate.setLostReason("Got drunk");

        mvc.perform(post("/api/associates")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(associate)))
                .andExpect(status().isOk());

        ArgumentCaptor<Associate> associateCaptor = ArgumentCaptor.forClass(Associate.class);

        verify(associateService,times(1)).saveAssociate(associateCaptor.capture());
        assertEquals(associateCaptor.getValue(),associate);

    }

}
