package webapp;

import domain.events.EventsProvider;
import domain.events.InMemoryEventsProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventsConfiguration {

    @Bean
    public EventsProvider eventsProvider() {
        return new InMemoryEventsProvider();
    }

}
