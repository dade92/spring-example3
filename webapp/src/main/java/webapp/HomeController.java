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

    @RequestMapping(value = "/configuration") // <2>
    public String configuration() {
        return "configuration.html"; // <3>
    }

    @RequestMapping(value = "/config/configuration") // <2>
    public String configurationUnderFolder() {
        return "config/configuration.html"; // <3>
    }
}