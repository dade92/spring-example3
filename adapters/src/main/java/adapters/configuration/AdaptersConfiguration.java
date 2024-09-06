package adapters.configuration;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
@EnableConfigurationProperties(DBConfigProperties.class)
public class AdaptersConfiguration {

    @Bean
    public  DataSource appDataSource(DBConfigProperties dbConfigProperties) {
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.url(dbConfigProperties.url);
        dataSourceBuilder.username(dbConfigProperties.username);
        dataSourceBuilder.password(dbConfigProperties.password);
        return dataSourceBuilder.build();
    }

    @Bean
    public JdbcTemplate appJdbcTemplate(DataSource appDataSource) {
        return new JdbcTemplate(appDataSource);
    }

}
