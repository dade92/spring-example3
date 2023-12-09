package webapp;

import domain.alive.AliveProvider;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import webapp.alive.AliveController;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AliveController.class)
public class AliveControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private AliveProvider aliveProvider;

    @Test
    void returns200() throws Exception {
        when(aliveProvider.retrieve()).thenReturn(false);

        mvc.perform(
            get("/api/alive")
                .contentType(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().isOk())
            .andExpect(content().json("{alive: false, message: \"Some random message\"}"));
    }
}
