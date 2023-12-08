package domain.events;

import java.util.List;

public class InMemoryEventsProvider implements EventsProvider {
    @Override
    public List<Event> retrieve() {
        return List.of(new Event("a message"), new Event("another message"));
    }
}
