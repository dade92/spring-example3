package adapters

import domain.Customer
import domain.CustomerRepository
import org.springframework.data.mongodb.core.MongoTemplate

class MongoCustomerRepository(
    private val mongoTemplate: MongoTemplate
): CustomerRepository {

    override fun insert(customer: Customer) {
        mongoTemplate.insert(customer, "customer")
    }

}