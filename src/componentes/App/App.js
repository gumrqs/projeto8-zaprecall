import TelaLogin from "../TelaLogin/TelaLogin.js";
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaPerguntas from "../TelaPerguntas/TelaPerguntas.js";

export default function App(){
    return (
        <>
        <BrowserRouter>
		
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/TelaPerguntas" element={<TelaPerguntas />}/>
			</Routes>
		</BrowserRouter>
        </>
    )
}