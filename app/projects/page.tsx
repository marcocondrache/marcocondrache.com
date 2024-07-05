import { projects } from "@/content";

function Empty() {
  return <span>Currently there are no available projects.</span>;
}

export default function Page() {
  if (projects.length === 0) return <Empty />;

  return (
    <div>
      <h1 className="text-2xl">My latest projects</h1>
    </div>
  );
}
