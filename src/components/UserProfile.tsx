interface User {
  id: number;
  name: string;
  role: string;
}

interface UserProfileProps {
  users: User[];
}

export default function UserProfile({ users }: UserProfileProps) {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-3 border border-gray-200 rounded-md bg-gray-100 flex justify-between items-center"
        >
          <div>
            <h4 className="font-medium text-gray-900">{user.name}</h4>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}