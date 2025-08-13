import Image from "next/image";
import { Star } from "lucide-react";

interface ProjectCardProps {
  imageUrl: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  time: string;
  how: string;
  hosts: string;
}

export default function ProjectCard({
  imageUrl,
  alt,
  category,
  title,
  description,
  time,
  how,
  hosts,
}: ProjectCardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-900/80 rounded-2xl border border-blue-100 dark:border-blue-900/40 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-400/60 hover:bg-blue-50/60 dark:hover:bg-blue-900/40 transition-all duration-300 p-6 flex flex-col gap-3 group">
      <div className="relative mb-3">
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={144}
          className="rounded-xl h-36 w-full object-cover shadow-sm group-hover:shadow-lg transition-all duration-300"
          style={{ objectFit: "cover", width: "100%", height: "144px" }}
          unoptimized
        />
      </div>
      <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/80 text-green-800 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm mb-1 self-start">
        <Star className="w-3.5 h-3.5 text-green-400 mr-1" />
        {category}
      </span>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h4>
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2 min-h-[48px]">
        {description}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-lg">
          <b>Čas:</b> {time}
        </span>
        <span className="inline-block bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 text-xs font-medium px-2.5 py-1 rounded-lg">
          <b>Jak:</b> {how}
        </span>
        {hosts != "" ? (
          <span className="inline-block bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 text-xs font-medium px-2.5 py-1 rounded-lg">
            <b>Organizátor:</b> {hosts}
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
