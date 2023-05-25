import { StrictMode } from 'react';
import React from "react";
import { App } from './App';
import './resets.css';
import {createRoot} from "react-dom/client";

const rootElement: HTMLElement | null = document.getElementById("root");
const root = rootElement!=null?createRoot(rootElement):null;
if (root!=null) {
    root.render(
        <StrictMode>
            <App/>
        </StrictMode>
    );
}