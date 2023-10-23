import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { InvestProvider } from "./InvestProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InvestProvider>
    <App />
  </InvestProvider>,
);
