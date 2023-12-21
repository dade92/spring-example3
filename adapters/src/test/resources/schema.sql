DROP TABLE IF EXISTS EVENTS;
CREATE TABLE EVENTS
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    event_message varchar(255)
);

INSERT INTO EVENTS (ID, event_message) VALUES (1, 'first message');
INSERT INTO EVENTS (ID, event_message) VALUES (2, 'second message');