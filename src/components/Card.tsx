interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-4 border border-gray-200 bg-gray-100 rounded-lg ">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
}
