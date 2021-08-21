import { CssModules } from "./compornents/CssModules";
import { InLineStyle } from "./compornents/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InLineStyle />
      <CssModules />
    </div>
  );
}
