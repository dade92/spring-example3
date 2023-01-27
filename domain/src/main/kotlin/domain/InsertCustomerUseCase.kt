package domain

class InsertCustomerUseCase(
    private val customerRepository: CustomerRepository
) {

    fun insert(customer: Customer) {
        customerRepository.insert(customer)
    }
}

class FindCustomerUseCase(
    private val customerRepository: CustomerRepository
) {

    fun findBy(name: String): Customer {
        return customerRepository.find(name)
    }

}