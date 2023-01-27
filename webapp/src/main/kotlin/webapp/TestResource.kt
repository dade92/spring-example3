package webapp

import domain.Customer
import domain.InsertCustomerUseCase
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class TestResource(
    private val insertCustomerUseCase: InsertCustomerUseCase
) {

    @GetMapping("/alive")
    fun alive(): ResponseEntity<*> {
        return ResponseEntity.ok("")
    }

    @PostMapping("/insert")
    fun insert(
        @RequestBody insertCustomerRequest: InsertCustomerRequest
    ) {
        insertCustomerUseCase.insert(insertCustomerRequest.toDomain())
    }

    @GetMapping("/find")
    fun find(
        @RequestParam name: String
    ): ResponseEntity<Customer> {
        return ResponseEntity.ok(
            insertCustomerUseCase.findBy(name)
        )
    }

}

data class InsertCustomerRequest(
    val name: String,
    val age: Int
) {

    fun toDomain() = Customer(this.name, age)

}