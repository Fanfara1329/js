import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";
import { PasswordPage } from "./pages/password";
import { WeatherPage } from "./pages/weather";
import { NumberPage } from "./pages/number";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/:password" element={<PasswordPage />} />
      <Route path="/:number" element={<NumberPage />} />
      <Route path="/:city" element={<WeatherPage />} />
    </Routes>
  );
}
