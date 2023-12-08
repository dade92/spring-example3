package domain.events;

import java.util.List;

public interface EventsProvider {
    List<Event> retrieve();
}
