package webapp.events;

import events.JdbcEventsProvider;
import org.springframework.jdbc.core.JdbcTemplate;
import webapp.cache.CachedEventsProvider;
import domain.events.EventsProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EventsConfiguration {

    @Bean
    public EventsProvider eventsProvider(JdbcTemplate appJdbcTemplate) {
        return new CachedEventsProvider(
            new JdbcEventsProvider(appJdbcTemplate)
        );
    }

}
