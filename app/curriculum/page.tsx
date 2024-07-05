export default function Page() {
  return (
    <section>
      <h1>Marco Mihai Condrache</h1>
      <h2 className="text-xl">Work experience</h2>
      <div className="[&>h3]:step mb-12 ml-4 border-l pl-8">
        <h3 className="mt-8 scroll-m-20 text-lg tracking-tight font-medium">
          Junior Software Developer
        </h3>
        <h4 className="text-sm text-stone-500">
          at <em>Danfoss</em>
        </h4>
        <div className="space-y-3 mt-3 text-sm">
          <p>
            IoT platform frontend developer using TypeScript and React.
            Maintains and enhances management platform, focusing on integration
            and code quality.
          </p>
          <p>
            Applies IoT expertise to create efficient web-based connectivity
            solutions.
          </p>
        </div>
        <h3 className="mt-8 scroll-m-20 text-lg tracking-tight font-medium">
          Embedded Software Developer
        </h3>
        <h4 className="text-sm text-stone-500">
          at <em>XTEE</em>
        </h4>
        <div className="space-y-3 mt-3 text-sm">
          <p>
            Developed custom hardware and software for advanced archery
            equipment. Used Python for machine control software.
          </p>
          <p>
            Integrated hardware, utilized industrial modeling tools, and solved
            technical issues. Collaborated with team to meet market needs and
            improve product performance.
          </p>
        </div>
      </div>
      <h2 className="text-xl">Education</h2>
      <div className="[&>h3]:step mb-12 ml-4 border-l pl-8">
        <h3 className="mt-8 scroll-m-20 text-lg tracking-tight font-medium">
          Bachelor's Degree in Computer Science
        </h3>
        <h4 className="text-sm text-stone-500">
          at <em>Università Ca Foscari</em>
        </h4>
        <div className="space-y-3 mt-3 text-sm">
          <p>
            IoT platform frontend developer using TypeScript and React.
            Maintains and enhances management platform, focusing on integration
            and code quality.
          </p>
          <p>
            Applies IoT expertise to create efficient web-based connectivity
            solutions.
          </p>
        </div>
        <h3 className="mt-8 scroll-m-20 text-lg tracking-tight font-medium">
          Diploma in Computer Science
        </h3>
        <h4 className="text-sm text-stone-500">
          at <em>ITTS Vito Volterra</em>
        </h4>
        <div className="space-y-3 mt-3 text-sm">
          <p>Graduated with honors.</p>
        </div>
      </div>
    </section>
  );
}
