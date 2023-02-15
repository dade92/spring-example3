package domain

interface FindCustomerUseCase {
    fun findBy(name: String): Customer
    fun getAll(): List<Customer>
}

class DefaultFindCustomerUseCase(
    private val customerRepository: CustomerRepository
) : FindCustomerUseCase {

    override fun findBy(name: String): Customer {
        return customerRepository.find(name)
    }

    override fun getAll(): List<Customer> {
        return customerRepository.getAll()
    }
}