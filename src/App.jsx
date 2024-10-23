import Background from "./components/Background.jsx";
import Foreground from "./components/Foreground.jsx";
export default function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
}
