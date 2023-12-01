package webapp;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventsController {

    @GetMapping("/api/events")
    public ResponseEntity<?> retrieveEvents() {
        return ResponseEntity.ok(new EventsResponse(List.of(new EventResponse("a message"))));
    }

}

record EventsResponse(List<EventResponse> events) {}

record EventResponse(String message) {}
