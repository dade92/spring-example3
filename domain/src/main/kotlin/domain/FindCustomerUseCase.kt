package domain

import arrow.core.Either

interface FindCustomerUseCase {
    fun findBy(name: String): Either<CustomerNotFoundError, Customer>
    fun getAll(): List<Customer>
}

object CustomerNotFoundError

class DefaultFindCustomerUseCase(
    private val customerRepository: CustomerRepository
) : FindCustomerUseCase {

    override fun findBy(name: String): Either<CustomerNotFoundError, Customer> = customerRepository.find(name)

    override fun getAll(): List<Customer> {
        return customerRepository.getAll()
    }
}