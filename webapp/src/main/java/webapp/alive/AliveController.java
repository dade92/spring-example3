package webapp.alive;

import domain.alive.AliveProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import webapp.ApiController;

@RestController
public class AliveController extends ApiController {

    private final AliveProvider aliveProvider;

    public AliveController(
        AliveProvider aliveProvider
    ) {
        this.aliveProvider = aliveProvider;
    }

    @GetMapping("/alive")
    public ResponseEntity<AliveResponse> alive() {
        return ResponseEntity.ok(new AliveResponse(aliveProvider.retrieve(), "Some random message"));
    }

}

record AliveResponse(
    boolean alive,
    String message
) {}

