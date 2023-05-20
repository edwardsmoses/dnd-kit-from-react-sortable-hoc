import './App.css'
import { SortableExampleStart } from "./start/";
import { DndKitEnd } from "./end/";

function App() {

  return (
    <>
      <h2>Start</h2>
      <SortableExampleStart />
      <hr />
      <h2>End</h2>
      <DndKitEnd />
    </>
  )
}

export default App
