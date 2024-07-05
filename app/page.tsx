import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl">Marco Mihai Condrache</h1>
          <h3 className="text-stone-500 text-md mt-1">Software Engineer</h3>
        </div>
        <ModeToggle />
      </div>
      <div className="mt-10 space-y-10">
        <p>
          I&apos;m a software engineer with a passion for continuous learning
          and staying updated with the latest tech. I thrive on using
          cutting-edge tools to solve complex challenges efficiently.
        </p>
        <p>
          My current focus is on mastering <em>TypeScript</em> and <em>Rust</em>
          , reflecting my interest in both high-level and systems programming.
          These skills allow me to tackle a wide range of projects with
          creativity and precision.
        </p>
      </div>
    </section>
  );
}
