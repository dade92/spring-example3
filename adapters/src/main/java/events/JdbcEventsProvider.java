package events;

import domain.events.Event;
import domain.events.EventsProvider;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public class JdbcEventsProvider implements EventsProvider {

    private final JdbcTemplate jdbcTemplate;

    public JdbcEventsProvider(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Optional<List<Event>> retrieve() {
        try {
            return Optional.of(
                jdbcTemplate.query("SELECT EVENT_MESSAGE FROM EVENTS", (resultSet, i) -> adaptEvent(resultSet))
            );
        } catch (DataAccessException e) {
            return Optional.empty();
        }
    }

    private Event adaptEvent(ResultSet resultSet) throws SQLException {
        return new Event(resultSet.getString("event_message"));
    }
}
