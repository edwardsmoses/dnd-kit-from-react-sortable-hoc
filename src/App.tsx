import './App.css'
import { SortableExampleStart } from "./start/";
import { DndKitEnd } from "./end/";

function App() {

  return (
    <>
      <h2>End</h2>
      <DndKitEnd />
      <hr />
      <h2>Start</h2>
      <SortableExampleStart />
    </>
  )
}

export default App
