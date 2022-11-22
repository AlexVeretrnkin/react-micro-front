import React, {useEffect} from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Layout from "./pages/layout";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';


const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>

                        <Route path="*" element={<Home/>}/>
                    </Route>
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

class Mfe4Element extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');

        this.attachShadow({mode: 'open'}).appendChild(mountPoint);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        );
    }
}

customElements.define('react-element', Mfe4Element);
