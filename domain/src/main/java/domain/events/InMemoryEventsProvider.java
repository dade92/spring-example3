package domain.events;

import java.util.List;
import java.util.Optional;

public class InMemoryEventsProvider implements EventsProvider {
    @Override
    public Optional<List<Event>> retrieve() {
        return Optional.of(List.of(new Event("a message"), new Event("another message")));
    }
}
