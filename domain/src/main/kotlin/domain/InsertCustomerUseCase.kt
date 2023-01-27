package domain

class InsertCustomerUseCase(
    private val customerRepository: CustomerRepository
) {

    fun insert(customer: Customer) {
        customerRepository.insert(customer)
    }

}

data class Customer(
    val name: String
)