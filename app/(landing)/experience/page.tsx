import { SewingPinFilledIcon } from "@radix-ui/react-icons";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "@/components/external-link";
import { Step, Steps } from "@/components/steps";

export const metadata = {
  robots: "noindex,nofollow",
};

export default function Page() {
  return (
    <>
      <section>
        <Card className="mb-12">
          <CardContent className="space-y-5 py-6">
            <div className="space-y-3">
              <h2 className="mb-5 text-xl">Marco Mihai Condrache</h2>
              <p>
                Ambitious computer science student pursuing a bachelor&apos;s
                degree.
              </p>
              <p>
                Currently leading a project to create an innovative home
                automation software system, demonstrating practical application
                of academic knowledge and a commitment to accessible technology
                solutions.
              </p>
            </div>
            <Separator />
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex flex-row flex-wrap gap-3">
                <ExternalLink href="https://github.com">github</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/marco-mihai-condrache/">
                  linkedin
                </ExternalLink>
                <ExternalLink href="https://github.com/mossida">
                  mossida
                </ExternalLink>
              </div>
              <div className="flex flex-row items-center gap-2">
                <SewingPinFilledIcon />
                <span className="text-sm text-stone-500">Venice, Italy</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-xl">Work experience</h2>
        <Steps>
          <Step
            title="Junior Software Developer"
            from={"2023-09-18"}
            to="present"
          >
            <h4 className="text-sm text-stone-500">
              at <em>Danfoss</em>
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <p>
                IoT platform frontend developer using TypeScript and React.
                Maintains and enhances management platform, focusing on
                integration and code quality.
              </p>
              <p>
                Applies IoT expertise to create efficient web-based connectivity
                solutions.
              </p>
            </div>
          </Step>

          <Step
            title="Embedded Software Developer"
            from={"2021-09-01"}
            to={"2022-12-01"}
          >
            <h4 className="text-sm text-stone-500">
              at <em>XTEE</em>
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <p>
                Developed custom hardware and software for advanced archery
                equipment. Used Python for machine control software.
              </p>
              <p>
                Integrated hardware, utilized industrial modeling tools, and
                solved technical issues. Collaborated with team to meet market
                needs and improve product performance.
              </p>
            </div>
          </Step>
        </Steps>
        <h2 className="text-xl">Education</h2>
        <Steps>
          <Step title="Bachelor's Degree in Computer Science">
            <h4 className="text-sm text-stone-500">
              at <em>Università Ca Foscari</em>
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <p>
                I&apos;m completing a curriculum with a strong focus on computer
                science and mathematics. I&apos;m excelling in higher-level math
                courses, including calculus and statistics.
              </p>
              <p>
                Participated in specialized computer science classes covering
                programming fundamentals, data structures, and computer
                architecture
              </p>
            </div>
          </Step>

          <Step title="Erasmus+">
            <h4 className="text-sm text-stone-500">
              at <em>SeviManager</em>
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <p>
                I&apos;created custom messaging and contact management software,
                collaborating with owners to design, implement, and integrate
                the solution.
              </p>
              <p>
                They provided testing, training, support, and documentation
                throughout the project.
              </p>
            </div>
          </Step>

          <Step title="Diploma in Computer Science">
            <h4 className="text-sm text-stone-500">
              at <em>ITTS Vito Volterra (High School)</em>
            </h4>
            <div className="mt-3 space-y-3 text-sm">
              <p>Graduated with honors.</p>
              <p>
                Advanced curriculum emphasizing computer science and
                mathematics. Excelled in high-level math courses. Specialized
                classes in programming and computer architecture.
              </p>
              <p>
                Demonstrated strong problem-solving skills and mathematical
                aptitude.
              </p>
            </div>
          </Step>
        </Steps>
      </section>
    </>
  );
}
