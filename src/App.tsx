import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    setName("RendBit");
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl text-blue-500 text-center">Welcome to {name}</h1>
    </div>
  );
}

export default App;
