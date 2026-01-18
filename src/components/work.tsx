
import type { EduItem, ExpItem } from "../types";
import Container from "./ui/container";
import SectionHeader from "./ui/section-header";
import TimelineBlock from "./ui/timeline-block";

type WorkProps = {
  data: {
    title: string;
    subtitle?: string;
    images: { education: string; experience: string };
    education: EduItem[];
    experience: ExpItem[];
  };
};

const Work = ({ data }: WorkProps) => {
  return (
    <section id="resume" className="bg-white py-8">
      <Container>
        <SectionHeader
          title={data.title}
          subtitle={
            data.subtitle ??
            "A snapshot of my academic foundation and hands-on industry experience that shape how I build reliable, scalable solutions."
          }
        />

        <div className="mt-12 space-y-12">
          <TimelineBlock<EduItem>
            label="Education"
            image={data.images.education}
            items={data.education}
            getTitle={(i) => i.title}
            getYears={(i) => i.years}
            renderBody={(i) => (
              <>
                {i.body ? <p className="mb-3">{i.body}</p> : null}
                {i.place ? <p className="font-semibold text-[#133b5c]">{i.place}</p> : null}
              </>
            )}
          />

          <TimelineBlock<ExpItem>
            label="Experience"
            image={data.images.experience}
            items={data.experience}
            getTitle={(i) => i.title}
            getYears={(i) => i.years}
            renderBody={(i) => (
              <>
                {i.description ? <p className="mb-2">{i.description}</p> : null}
              </>
            )}
          />
        </div>
      </Container>
    </section>
  );
};

export default Work;
