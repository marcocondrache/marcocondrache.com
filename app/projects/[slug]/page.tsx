import { projects } from "@/content";
import { notFound } from "next/navigation";

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
        <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
      ))}
    </>
  );
}
