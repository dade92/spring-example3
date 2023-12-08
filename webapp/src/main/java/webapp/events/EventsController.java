package webapp.events;

import domain.events.Event;
import domain.events.EventsProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import webapp.alive.ApiController;

import java.util.List;

@RestController
public class EventsController extends ApiController {

    private EventsProvider eventsProvider;

    public EventsController(EventsProvider eventsProvider) {
        this.eventsProvider = eventsProvider;
    }

    @GetMapping("/events")
    public ResponseEntity<?> retrieveEvents() {
        List<Event> events = eventsProvider.retrieve();

        return ResponseEntity.ok(adaptEventsToResponse(events));
    }

    private EventsResponse adaptEventsToResponse(List<Event> events) {
        return new EventsResponse(
            events.stream().map(e -> new EventResponse(e.message())).toList()
        );
    }

}

record EventsResponse(List<EventResponse> events) {}

record EventResponse(String message) {}
