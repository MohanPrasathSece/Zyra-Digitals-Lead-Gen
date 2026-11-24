import { Link } from "react-router-dom";
import type { Project } from "@/lib/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  showFeatures?: boolean;
  className?: string;
};

const ProjectCard = ({ project, showFeatures = false, className = "" }: ProjectCardProps) => (
  <article
    className={`flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-medical ring-1 ring-primary/10 transition-shadow duration-200 hover:shadow-medical-lg ${className}`}
  >
    <Link to={`/our-work/${project.slug}`} className="group relative aspect-[4/3] overflow-hidden bg-primary/5 block">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} website design`}
          loading="lazy"
          decoding="async"
          width={640}
          height={480}
          className={`h-full w-full object-cover ${project.imageScale ? "scale-[1.075]" : ""}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 text-center transition-colors group-hover:from-primary/15">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
            {project.industry}
          </span>
        </div>
      )}
    </Link>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {project.industry}
        </span>
        {project.location && (
          <span className="text-xs font-medium text-muted">{project.location}</span>
        )}
      </div>

      <h3 className="mt-3 font-semibold text-foreground">
        <Link to={`/our-work/${project.slug}`} className="hover:text-primary transition-colors">
          {project.name}
        </Link>
      </h3>
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

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
        <Link
          to={`/our-work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View Case Study & Rankings <ArrowRight size={14} />
        </Link>

        {project.website && (
          <a
            href={`https://${project.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-primary transition-colors"
            title={`Visit ${project.website}`}
          >
            Live site <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
