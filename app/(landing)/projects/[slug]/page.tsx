import { notFound } from "next/navigation";
import { projects } from "@/content";

function getBySlug(slug: string) {
  return projects.find((project) => project.title === slug);
}

export type ProjectProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: ProjectProps) {
  const project = getBySlug(slug);

  if (!project) return notFound();

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.title}
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></div>
      ))}
    </>
  );
}
