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
}

export const EventCard: FC<Props> = ({children, onClick}) => {
    return <Card onClick={onClick}>
        <CardActionArea>
            <StyledCard>
                {children}
            </StyledCard>
        </CardActionArea>
    </Card>
}