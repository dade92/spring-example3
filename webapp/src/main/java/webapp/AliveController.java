package webapp;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AliveController {

    @GetMapping("/api/alive")
    public ResponseEntity<AliveResponse> alive() {
        return ResponseEntity.ok(new AliveResponse(true, "Some random message"));
    }

}

record AliveResponse(
    boolean alive,
    String message
) {}

