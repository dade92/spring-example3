import React from "react";
import {AppEvent} from './logic/EventDataRetriever'
import {Loader} from "./Loader";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import styled from "styled-components";
import {EventCard} from "./EventCard";

interface Props {
    events: AppEvent[];
    isLoading: boolean;
}

export const EventList: React.FC<Props> = ({events, isLoading}) => {
    return <>
        {isLoading && <Loader/>}
        {
            events.map((e: AppEvent, index) => {
                return <EventCard event={e} index={index}/>
            })
        }
    </>
}