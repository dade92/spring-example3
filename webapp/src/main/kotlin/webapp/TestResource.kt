package webapp

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestResource {

    @GetMapping("/alive")
    fun alive(): ResponseEntity<*> {
        return ResponseEntity.ok("")
    }

}