/*
package com.selfrequest;

import com.selfrequest.model.Visitor;
import com.selfrequest.repository.VisitorRepository;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger log = LogManager.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(VisitorRepository repository) {
        return args -> {
          log.info("Preloading " + repository.save(new Visitor("Ru","Vitalijs","Cognizant","5678345687346","forgot badge",true, "243523452", "5637643")));
          log.info("Preloading " + repository.save(new Visitor("Katherine")));
        };
    }
}
*/