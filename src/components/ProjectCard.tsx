import type { Project } from "@/lib/projects";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  showFeatures?: boolean;
  className?: string;
};

const ProjectCard = ({ project, showFeatures = false, className = "" }: ProjectCardProps) => (
  <article
    className={`flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-medical ring-1 ring-primary/10 ${className}`}
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} website design`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
            {project.industry}
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {project.industry}
        </span>
        {project.location && (
          <span className="text-xs font-medium text-muted">{project.location}</span>
        )}
      </div>

      <h3 className="mt-3 font-semibold text-foreground">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {showFeatures && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200/80"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}

      {project.website && (
        <a
          href={`https://${project.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
        >
          Visit website <ExternalLink size={15} />
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
