package domain;

import domain.alive.DefaultAliveProvider;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class AliveProviderTest {

    private DefaultAliveProvider defaultAliveProvider = new DefaultAliveProvider();

    @Test
    void shouldReturnTrue() {
        assertThat(
            defaultAliveProvider.retrieve(), is(true)
        );
    }
}
