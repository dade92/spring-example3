package webapp

import domain.*
import org.springframework.http.HttpStatus
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
    ): ResponseEntity<*> {
        return try {
            insertCustomerUseCase.insert(insertCustomerRequest.toDomain())
            ResponseEntity.noContent().build<Unit>()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build<Unit>()
        }
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