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