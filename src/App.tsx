// App.tsx
import { Routes, Route } from "react-router-dom";
import QuestionPreviewComponent from "./components/routes/auth_routes/QuestionPreviewComponent";
import ThankyouPage from "./components/routes/auth_routes/ThankyouPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuestionPreviewComponent />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </div>
  );
}

export default App;
