import "./App.css";
import { useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { allRoutes } from "./routes.tsx";

function App() {
  const nodeRef = useRef(null);

  const location = useLocation();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef} // Pass the ref to CSSTransition
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <div
            id="main-app"
            ref={nodeRef}
            style={{ height: "100%", width: "100%" }}
          >
            {" "}
            {/* Apply the ref to the transition wrapper */}
            <Suspense fallback={<h1>Loading...</h1>}>
              {allRoutes(location)}
            </Suspense>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
