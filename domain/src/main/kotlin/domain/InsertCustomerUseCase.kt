package domain

class InsertCustomerUseCase(
    private val customerRepository: CustomerRepository
) {

    fun insert(customer: Customer) {
        customerRepository.insert(customer)
    }

    fun findBy(name: String): Customer {
        return customerRepository.find(name)
    }

}

data class Customer(
    val name: String,
    val age: Int
)