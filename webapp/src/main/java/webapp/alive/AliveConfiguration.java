package webapp.alive;

import domain.AliveProvider;
import domain.DefaultAliveProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AliveConfiguration {

    @Bean
    public AliveProvider aliveProvider() {
        return new DefaultAliveProvider();
    }

}
