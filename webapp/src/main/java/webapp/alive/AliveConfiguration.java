package webapp.alive;

import domain.alive.AliveProvider;
import domain.alive.DefaultAliveProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AliveConfiguration {

    @Bean
    public AliveProvider aliveProvider() {
        return new DefaultAliveProvider();
    }

}
