import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteRenderer from "./routes/RouteRenderer";
import { AuthProvider } from "./routes/AuthContext";
import { Toaster } from "react-hot-toast";
import "./App.css"

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Toaster />
      <BrowserRouter>
        <RouteRenderer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
