package webapp;

import domain.events.Event;
import domain.events.EventsProvider;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import webapp.events.EventsController;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EventsController.class)
public class EventsControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private EventsProvider eventsProvider;

    @Test
    void returns200() throws Exception {
        when(eventsProvider.retrieve()).thenReturn(Optional.of(List.of(new Event("hey!"))));

        mvc.perform(
            get("/api/events")
                .contentType(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().isOk())
            .andExpect(content().json("{events: [{message: 'hey!'}]}"));

        verify(eventsProvider).retrieve();
    }

    @Test
    void returns500InCaseOfErrors() throws Exception {
        when(eventsProvider.retrieve()).thenReturn(Optional.empty());

        mvc.perform(
                get("/api/events")
                    .contentType(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().is5xxServerError());

        verify(eventsProvider).retrieve();
    }
}
