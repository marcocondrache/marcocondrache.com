import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Marco Mihai Condrache</h1>
          <h2 className="mt-1 text-stone-500">Software Engineer</h2>
        </div>
        <ModeToggle />
      </div>
      <div className="mt-10 space-y-8">
        <p>
          I&apos;m driven by an insatiable appetite for learning and
          self-improvement. I excel at leveraging state-of-the-art technologies
          to tackle intricate problems with precision and efficiency.
        </p>
        <p>
          Currently, I&apos;m immersing myself in <em>TypeScript</em> and{" "}
          <em>Rust</em>, aiming to push the boundaries of web development by
          creating high-performance, engaging user experiences.
        </p>
        <p>
          My approach to growth is hands-on: I learn through active{" "}
          <em>building</em> and&nbsp;
          <em>experimentation</em>, constantly refining my skills in the
          process.
        </p>
      </div>
    </section>
  );
}
