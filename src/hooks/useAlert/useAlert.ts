import { useContext, useMemo } from "react"
import { DefaultContext } from "./DefaultContext"


export const useAlert = () => {
    const alertContext = useContext(DefaultContext);
    const alert = useMemo(() => {
        return alertContext!;
    }, [alertContext]);

    return alert;
}