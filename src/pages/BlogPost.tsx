import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Info, RefreshCw, User } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { articleSchema } from "@/lib/schema";
import {
  BLOG_POSTS,
  getPost,
  formatDate,
  readingTime,
  type BlogBlock,
} from "@/lib/blog";
import { PAGE_BANNERS } from "@/lib/banners";

/** Renders **bold** and [links](url) inside a plain-text block. */
const renderInline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const pattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(<strong key={key++} className="font-semibold text-foreground">{token.slice(2, -2)}</strong>);
    } else {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (link) {
        const [, label, href] = link;
        nodes.push(
          href.startsWith("http") ? (
            <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
              {label}
            </a>
          ) : (
            <Link key={key++} to={href} className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
              {label}
            </Link>
          )
        );
      } else {
        nodes.push(token);
      }
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const Block = ({ block }: { block: BlogBlock }) => {
  switch (block.t) {
    case "h2":
      return <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">{block.c}</h2>;
    case "h3":
      return <h3 className="mt-7 mb-3 text-lg font-semibold text-foreground">{block.c}</h3>;
    case "p":
      return <p className="mb-5 leading-relaxed text-muted">{renderInline(block.c)}</p>;
    case "ul":
      return (
        <ul className="mb-6 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mb-6 overflow-x-auto rounded-xl ring-1 ring-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-blue-50/80">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-medium text-foreground" : "text-muted"}`}>
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <div className="mb-6 flex gap-3 rounded-xl bg-blue-50/80 p-4 ring-1 ring-primary/10">
          <Info size={18} className="mt-0.5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted">{block.c}</p>
        </div>
      );
    case "cta":
      return (
        <div className="my-8 rounded-2xl bg-primary p-6 text-center sm:p-8">
          <p className="mb-5 text-white/90 leading-relaxed">{block.c}</p>
          <Link
            to={block.to}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-white/90 active:scale-95"
          >
            {block.label} <ArrowRight size={16} />
          </Link>
        </div>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const path = `/blogs/${post.slug}`;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <SEO
        title={post.seoTitle}
        description={post.description}
        keywords={[post.primaryKeyword, ...post.supportingKeywords].join(", ")}
        canonical={path}
        ogType="article"
        ogImage={post.image}
        breadcrumbs={[
          { name: "Blog", path: "/blogs" },
          { name: post.h1, path },
        ]}
        schema={articleSchema({
          headline: post.h1,
          description: post.description,
          path,
          image: post.image,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />

      {/* Article header */}
      <article>
        <header className="relative overflow-hidden py-12 sm:py-16">
          <img src={PAGE_BANNERS.blog} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-blue-800/75" />
          <div className="container relative z-10 mx-auto max-w-3xl px-6">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blogs" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/90">{post.category}</span>
            </nav>

            <span className="mb-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              {post.category}
            </span>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <User size={14} className="text-white/70" /> By the Zyra Digitals team
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} className="text-white/70" /> Published {formatDate(post.datePublished)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-white/70" /> {readingTime(post)} min read
              </span>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="container mx-auto max-w-3xl px-6">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="-mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg ring-1 ring-primary/10"
          />
        </div>

        {/* Body */}
        <div className="container mx-auto max-w-3xl px-6 py-12">
          <FadeInView>
            <div className="text-[16px]">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw size={13} className="text-primary" /> Last updated {formatDate(post.dateModified)}
              </span>
              <Link to="/blogs" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">
                <ArrowLeft size={14} /> Back to all articles
              </Link>
            </div>
          </FadeInView>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-blue-50/80 py-14">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Continue reading</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blogs/${p.slug}`}
                  className="flex gap-4 rounded-2xl bg-card p-5 shadow-medical ring-1 ring-primary/10 transition-transform hover:-translate-y-1"
                >
                  <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-20 w-28 shrink-0 rounded-xl object-cover" />
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">{p.category}</p>
                    <h3 className="text-sm font-bold leading-snug text-foreground">{p.h1}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Need help with your website or SEO?"
        subtitle="Tell us about your business and goals - we'll recommend the right approach to bring you more enquiries, with no obligation and a guaranteed 1-hour reply."
        buttonText="Get a Free Quote"
        to="/contact"
      />
    </div>
  );
};

export default BlogPost;
