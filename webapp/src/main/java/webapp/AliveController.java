package webapp;

import domain.AliveProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AliveController {

    private final AliveProvider aliveProvider;

    public AliveController(
        AliveProvider aliveProvider
    ) {
        this.aliveProvider = aliveProvider;
    }

    @GetMapping("/api/alive")
    public ResponseEntity<AliveResponse> alive() {
        return ResponseEntity.ok(new AliveResponse(aliveProvider.retrieve(), "Some random message"));
    }

}

record AliveResponse(
    boolean alive,
    String message
) {}

