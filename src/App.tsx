import "./App.css";
import TooltipWithoutKey from "./components/TooltipWithoutKey";

function App() {
  return (
    <>
      <TooltipWithoutKey text="Hovering 1">
        <span>Hover me 1</span>
      </TooltipWithoutKey>
      <TooltipWithoutKey text="Hovering 2">
        <span>Hover me 2</span>
      </TooltipWithoutKey>
      <TooltipWithoutKey text="Hovering 3">
        <span>Hover me 3</span>
      </TooltipWithoutKey>
      <TooltipWithoutKey text="Hovering 4">
        <span>Hover me 4</span>
      </TooltipWithoutKey>
      <TooltipWithoutKey text="Hovering 5">
        <span>Hover me 5</span>
      </TooltipWithoutKey>
    </>
  );
}

export default App;
