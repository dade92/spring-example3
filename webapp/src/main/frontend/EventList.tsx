import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";
import {Card, CardActionArea, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";
import styled from "styled-components";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

const StyledCard = styled(CardContent)`
  min-height: 56px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
`

export const EventList: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading && <Loader/>}
        {
            events.map((e: AppEvent, index) => {
                return <Card data-testid={`event-${index}`}>
                    <CardActionArea>
                        <StyledCard>
                            <Typography>
                                {e.message}
                            </Typography>
                        </StyledCard>
                    </CardActionArea>
                </Card>
            })
        }
    </>
}