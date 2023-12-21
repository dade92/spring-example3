package events;

import domain.events.Event;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

class JdbcEventsProviderTest {

    private JdbcTemplate jdbcTemplate;

    private JdbcEventsProvider jdbcEventsProvider;

    @BeforeEach
    void setUp() {
        jdbcTemplate = new JdbcTemplate(
            new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("classpath:schema.sql")
                .build()
        );
        jdbcEventsProvider = new JdbcEventsProvider(jdbcTemplate);
    }

    @Test
    void retrieveEvents() {
        assertThat(
            jdbcEventsProvider.retrieve(),
            is(Optional.of(List.of(
                new Event("first message"),
                new Event("second message")
            )))
        );
    }
}