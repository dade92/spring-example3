import React, {FC} from "react";
import {AppEvent} from "./logic/EventDataRetriever";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import styled from "styled-components";

interface Props {
    event: AppEvent;
    index: number;
}

const StyledCard = styled(CardContent)`
  min-height: 56px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
`

export const EventCard: FC<Props> = ({event, index}) => {
    return <Card data-testid={`event-${index}`} onClick={() => {console.log('event clicked: ' + index)}}>
        <CardActionArea>
            <StyledCard>
                <Typography>
                    {event.message}
                </Typography>
            </StyledCard>
        </CardActionArea>
    </Card>
}