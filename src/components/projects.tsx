import { useMemo, useState } from "react";
import type { ProjectItem } from "../types";
import Container from "./ui/container";
import Card from "./ui/card";
import { Activity, Atom, Code, Cpu, ExternalLink } from "lucide-react";
import Tabs from "./ui/tabs";
import SectionHeader from "./ui/section-header";

type ProjectsData = {
    title: string;
    categories: string[];
    items: ProjectItem[];
};

type Props = {
    data: ProjectsData;
};

const getProjectIcon = (project: ProjectItem) => {
    if (project.tags?.includes("RxJS")) return Activity;
    if (project.category === "Parallel Programming") return Cpu;
    if (project.category === "React") return Atom;
    return Code;
};


const Projects = ({ data }: Props) => {
    const [active, setActive] = useState<string>("All");

    const filtered = useMemo(() => {
        if (active === "All") return data.items;
        return data.items.filter((p) => p.category === active);
    }, [active, data.items]);

    return (
        <section id="projects" className="bg-white py-8">
            <Container>
                <SectionHeader
                    title={data.title}
                    subtitle="A selection of projects that demonstrate my problem-solving skills, technical expertise, and real-world experience."
                />

                <Tabs
                    items={data.categories}
                    active={active}
                    onChange={setActive}
                    label=""
                />
                <ProjectGrid items={filtered} />
            </Container>
        </section>
    );
};




const ProjectGrid = ({ items }: { items: ProjectItem[] }) => (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((p) => (
            <ProjectCard key={`${p.title}-${p.url}`} project={p} />
        ))}
    </div>
);

const ProjectCard = ({ project }: { project: ProjectItem }) => {
    const Icon = getProjectIcon(project);

    return (
        <Card className="w-full max-w-[30rem] border-l-[3px] border-teal-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                        {project.thumb ? (
                            <img
                                src={project.thumb}
                                alt={project.title}
                                className="h-10 w-10 object-contain"
                            />
                        ) : (
                            <Icon className="h-7 w-7 text-teal-500" />
                        )}
                    </div>

                    <div className="flex-1">
                        <p className="text-lg font-semibold text-ink-900">{project.title}</p>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center text-sm text-teal-500 hover:text-teal-600 break-all"
                        >
                            {project.url}
                            <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>

                <TagList tags={project.tags} />
            </div>
        </Card>
    );
};

const TagList = ({ tags }: { tags: string[] }) => (
    <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
            <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-semibold tracking-wide"
            >
                {tag}
            </span>
        ))}
    </div>
);

export default Projects;
