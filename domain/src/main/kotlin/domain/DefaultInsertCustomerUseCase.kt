package domain

interface InsertCustomerUseCase {
    fun insert(customer: Customer)
}

class DefaultInsertCustomerUseCase(
    private val customerRepository: CustomerRepository
) : InsertCustomerUseCase {

    override fun insert(customer: Customer) {
        customerRepository.insert(customer)
    }
}