package webapp

import domain.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class TestResource(
    private val insertCustomerUseCase: InsertCustomerUseCase,
    private val findCustomerUseCase: FindCustomerUseCase
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
            findCustomerUseCase.findBy(name)
        )
    }

}

data class InsertCustomerRequest(
    val name: String,
    val age: Int,
    val favouriteDestinations: FavouriteDestinations
) {

    fun toDomain() = Customer(this.name, age, favouriteDestinations)

}