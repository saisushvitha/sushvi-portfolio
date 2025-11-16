import { useState } from "react";
import type { ProjectItem } from "../types";
import Container from "./container";
import Card from "./card";
import { ExternalLink } from "lucide-react";

type Props = {
    data: { title: string; categories: string[]; items: ProjectItem[] };
};

export default function Projects({ data }: Props) {
    const [active, setActive] = useState<string>("All");

    const filtered =
        active === "All"
            ? data.items
            : data.items.filter((p) => p.category === active);

    return (
        <section id="projects" className="bg-white py-24">
            <Container>
                {/* Section heading */}
                <div className="text-center">
                    <span className="inline-block bg-brand-50 text-brand-600 px-3 py-1 rounded-lg text-xs font-bold">
                        WORK
                    </span>
                    <h2 className="mt-5 text-3xl font-medium text-slate-700">
                        {data.title}
                    </h2>
                    <p className="mt-4 text-ink-500 max-w-3xl mx-auto">
                        We craft digital, graphic and dimensional thinking, to create
                        category leading brand experiences that have meaning .
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-10 border-b border-slate-200">
                    <div className="flex justify-start">
                        <div className="flex gap-8 text-sm sm:text-base">
                            {data.categories.map((cat) => {
                                const isActive = active === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActive(cat)}
                                        className={`pb-3 -mb-px border-b-2 transition-colors ${isActive
                                                ? "border-teal-500 text-ink-900"
                                                : "border-transparent text-ink-500 hover:text-ink-700"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>



                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map((p) => (
                        <ProjectCard key={p.title + p.url} project={p} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ProjectCard({ project }: { project: ProjectItem }) {
    return (
        <Card>
            <div className="p-6 flex flex-col gap-4">
                {/* Logo + title */}
                <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                        {project.thumb ? (
                            <img
                                src={project.thumb}
                                alt={project.title}
                                className="h-10 w-10 object-contain"
                            />
                        ) : (
                            <span className="text-lg font-bold text-ink-500">
                                {project.title.charAt(0)}
                            </span>
                        )}
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold text-ink-900">
                            {project.title}
                        </p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center text-sm text-teal-500 hover:text-teal-600"
                        >
                            {project.url}
                            <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-md bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
}
