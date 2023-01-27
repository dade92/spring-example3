package domain

interface CustomerRepository {
    fun insert(customer: Customer)
    fun find(name: String): Customer
}