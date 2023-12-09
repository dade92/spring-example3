package domain.events;

import java.util.List;
import java.util.Optional;

public interface EventsProvider {
    Optional<List<Event>> retrieve();
}
