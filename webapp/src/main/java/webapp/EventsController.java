package webapp;

import domain.events.EventsProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventsController extends ApiController {

    private EventsProvider eventsProvider;

    public EventsController(EventsProvider eventsProvider) {
        this.eventsProvider = eventsProvider;
    }

    @GetMapping("/events")
    public ResponseEntity<?> retrieveEvents() {
        return ResponseEntity.ok(new EventsResponse(
            eventsProvider.retrieve().stream().map(e -> new EventResponse(e.message())).toList()));
    }

}

record EventsResponse(List<EventResponse> events) {}

record EventResponse(String message) {}
