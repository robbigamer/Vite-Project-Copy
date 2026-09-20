import Button from "./components/Button";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 gap-4">
      <Button onClick={() => alert("Hello World!")}>Click Me</Button>

      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
}

export default App;
