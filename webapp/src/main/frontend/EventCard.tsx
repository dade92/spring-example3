import React, {FC, ReactNode} from "react";
import {Card, CardActionArea, CardContent} from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(CardContent)`
  min-height: 56px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
`

interface Props {
    children: ReactNode;
    onClick: () => void;
    index: number;
}

export const EventCard: FC<Props> = ({children, onClick, index}) => {
    return <Card onClick={onClick} data-testid={`event-${index}`}>
        <CardActionArea>
            <StyledCard>
                {children}
            </StyledCard>
        </CardActionArea>
    </Card>
}