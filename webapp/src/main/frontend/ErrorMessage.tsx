import {FC} from "react";
import {Alert, Snackbar} from "@mui/material";

interface Props {
    onClose: () => void;
}

export const ErrorMessage : FC<Props> = ({onClose}) => {
    return <Snackbar open={true} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity="error">
            Error retrieving event list
        </Alert>
    </Snackbar>

}