"use client";
import * as React from "react";
import { ThemeProvider as TP } from "next-themes";

type Props = {
    children?: React.ReactNode;
};

export function ThemeProvider({children}) {
    return (
        <TP attribute="class" defaultTheme="system" enableSystem>
            {children}
        </TP>
    );
}