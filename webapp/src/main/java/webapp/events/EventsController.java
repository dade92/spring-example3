package webapp.events;

import domain.events.Event;
import domain.events.EventsProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import webapp.alive.ApiController;

import java.util.List;
import java.util.Optional;

@RestController
public class EventsController extends ApiController {

    private final EventsProvider eventsProvider;

    public EventsController(EventsProvider eventsProvider) {
        this.eventsProvider = eventsProvider;
    }

    @GetMapping("/events")
    public ResponseEntity<?> retrieveEvents() {
        Optional<List<Event>> events = eventsProvider.retrieve();

        if(events.isPresent()) {
            return ResponseEntity.ok(adaptEventsToResponse(events.get()));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private EventsResponse adaptEventsToResponse(List<Event> events) {
        return new EventsResponse(
            events.stream().map(e -> new EventResponse(e.message())).toList()
        );
    }

}

record EventsResponse(List<EventResponse> events) {}

record EventResponse(String message) {}
