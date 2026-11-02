// src/App.tsx
import Button from "./components/Button";
import Card from "./components/Card";
import UserProfile from "./components/UserProfile";

const users = [
  { id: 1, name: "Anna", role: "Frontend Dev" },
  { id: 2, name: "James", role: "Backend Dev" },
  { id: 3, name: "Lebron", role: "UI Designer" },
];

export default function App() {
  return (
    <div className="p-8 mx-auto space-y-6">
      <h1 className="text-2xl font-bold">React Example</h1>

      <div className="flex gap-4">
        <Button
          text="Submit"
          color="bg-green-600"
          onClick={() => alert("Submitted!")}
        />
        <Button
          text="Cancel"
          color="bg-red-600"
          onClick={() => alert("Cancelled!")}
        />
      </div>

      <Card
        title="Card Example"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquet ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animi id est laborum."
      />

      <UserProfile users={users} />
    </div>
  );
}
