package cache;

import domain.events.Event;
import domain.events.EventsProvider;
import org.springframework.cache.annotation.Cacheable;

import java.util.List;

public class CachedEventsProvider implements EventsProvider {

    private final EventsProvider delegate;

    public CachedEventsProvider(
        EventsProvider delegate
    ) {

        this.delegate = delegate;
    }

    @Override
    @Cacheable("events")
    public List<Event> retrieve() {
        return delegate.retrieve();
    }
}
