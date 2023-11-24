package webapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = "/configuration") // <2>
    public String configuration() {
        return "configuration.html"; // <3>
    }
}