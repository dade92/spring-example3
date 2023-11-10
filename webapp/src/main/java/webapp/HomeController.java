package webapp;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
    @RequestMapping(value = "/") // <2>
    public String index() {
        return "index.html"; // <3>
    }

    @GetMapping("/api/alive")
    public ResponseEntity<AliveResponse> alive() {
        return ResponseEntity.ok(new AliveResponse(true, "Some random message"));
    }
}

record AliveResponse(
    boolean alive,
    String message
) {}
