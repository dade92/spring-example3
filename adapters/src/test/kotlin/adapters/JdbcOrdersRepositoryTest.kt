package adapters

import arrow.core.Either.Left
import arrow.core.Either.Right
import domain.DateTimeProvider
import domain.Order
import domain.OrdersRepositoryError
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.jmock.AbstractExpectations.returnValue
import org.jmock.Expectations
import org.jmock.auto.Mock
import org.jmock.junit5.JUnit5Mockery
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.RegisterExtension
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
import java.sql.ResultSet
import java.time.LocalDateTime

private val NOW = LocalDateTime.of(2021, 3, 6, 0, 0, 0)

