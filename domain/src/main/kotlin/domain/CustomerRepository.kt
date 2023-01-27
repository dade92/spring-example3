package domain

interface CustomerRepository {
    fun insert(customer: Customer)
}