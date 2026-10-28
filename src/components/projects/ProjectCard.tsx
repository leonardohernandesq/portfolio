import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/type";
import { PhoneMockup } from "./PhoneMockup";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card group flex w-full shrink-0 flex-col gap-6 lg:w-[min(52vw,880px,68svh)]">
      <a
        href={project.live ?? project.github}
        target="_blank"
        rel="noreferrer"
        data-cursor="Ver"
        className="project-media relative block overflow-hidden rounded-2xl border border-paper/10 bg-paper/5"
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-paper/10 px-4">
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="ml-auto font-display text-xs tracking-widest text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {project.mobile ? (
          <div className="relative flex aspect-16/10 items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(241,143,1,0.18),transparent_65%)]">
            <PhoneMockup
              src={project.image}
              alt={`Prévia do projeto ${project.title}`}
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`Prévia do projeto ${project.title}`}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="block h-auto w-full grayscale-40 transition-[filter] duration-700 ease-expo group-hover:grayscale-0"
          />
        )}
      </a>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <div className="flex gap-5 font-display text-sm uppercase tracking-widest">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                Ver projeto <FiArrowUpRight />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        </div>
        <p className="text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-paper/15 px-3 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
