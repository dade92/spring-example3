package domain

interface FindCustomerUseCase {
    fun findBy(name: String): Customer
}

class DefaultFindCustomerUseCase(
    private val customerRepository: CustomerRepository
) : FindCustomerUseCase {

    override fun findBy(name: String): Customer {
        return customerRepository.find(name)
    }
}