import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App"


console.log(`Api Base: ${process.env.API_BASE}`);

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error('Failed to find the root element!!')
const root = createRoot(rootElement)
root.render(<App />)