package webapp

import domain.CustomerRepository
import domain.FindCustomerUseCase
import domain.InsertCustomerUseCase
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AppConfiguration {

    @Bean
    fun insertCustomerUseCase(customerRepository: CustomerRepository): InsertCustomerUseCase =
        InsertCustomerUseCase(customerRepository)

    @Bean
    fun findCustomerUseCase(customerRepository: CustomerRepository): FindCustomerUseCase =
        FindCustomerUseCase(customerRepository)



}