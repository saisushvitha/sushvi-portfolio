import type { ProjectItem } from "../types";
import Container from "./container";
import Card from "./card";


type Props = {
    data: { title: string; categories: string[]; items: ProjectItem[] }
};

export default function Projects({ data }: Props) {
    return (
        <section id="projects" className="bg-white py-24">
            <Container>
                <div className="text-center">
                    <span className="inline-block bg-brand-50 text-brand-600 px-3 py-1 rounded-lg text-xs font-bold">WORK</span>
                    <h2 className="mt-5 text-4xl font-extrabold text-ink-900">{data.title}</h2>
                    <p className="mt-4 text-ink-500 max-w-3xl mx-auto">
                        We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {data.items.map((p, idx) => (
                        <Card key={idx}>
                            <div className="p-6">
                                <h3>{p.title}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
