package webapp.events;

import webapp.cache.CachedEventsProvider;
import domain.events.EventsProvider;
import domain.events.InMemoryEventsProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventsConfiguration {

    @Bean
    public EventsProvider eventsProvider() {
        return new CachedEventsProvider(
            new InMemoryEventsProvider()
        );
    }

}
