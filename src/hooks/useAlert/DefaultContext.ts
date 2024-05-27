import { createContext } from "react";
import { TAlert, TAlertValue } from "./types";

export const DefaultContext = createContext<TAlertValue | null>(null);