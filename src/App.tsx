import "./App.css";
import SeansonBookmark from "./components/SeansonBookmark";
import Nav from "./components/Nav";

function App(props: any) {
  return (
    <div className="flex">
      <div className="flex-wrap pl-10">
        <div className="mb-4 text-5xl">Home</div>
        <Nav></Nav>
      </div>
      <div className="flex flex-wrap p-10">
        <SeansonBookmark season="1"></SeansonBookmark>
        <SeansonBookmark season="2"></SeansonBookmark>
        <SeansonBookmark season="3"></SeansonBookmark>
        <SeansonBookmark season="4"></SeansonBookmark>
        <SeansonBookmark season="5"></SeansonBookmark>
      </div>
    </div>
  );
}

export default App;
