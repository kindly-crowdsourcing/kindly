interface TargetAudienceCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function TargetAudienceCard({
  title,
  description,
  className = "",
}: TargetAudienceCardProps) {
  return (
    <div className={`p-4 rounded-lg border ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
