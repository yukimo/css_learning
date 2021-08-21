import { CssModules } from "./compornents/CssModules";
import { InLineStyle } from "./compornents/InlineStyle";
import { StyledJsx } from "./compornents/StyledJsx";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InLineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
