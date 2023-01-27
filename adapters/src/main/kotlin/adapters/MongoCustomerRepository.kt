package adapters

import domain.Customer
import domain.CustomerRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query

class MongoCustomerRepository(
    private val mongoTemplate: MongoTemplate
): CustomerRepository {

    override fun insert(customer: Customer) {
        mongoTemplate.insert(customer, "customer")
    }

    override fun find(name: String): Customer {
        val query = Query()
        query.addCriteria(Criteria.where("name").`is`("Davide"))
        return mongoTemplate.find(query, Customer::class.java)[0]
    }


}