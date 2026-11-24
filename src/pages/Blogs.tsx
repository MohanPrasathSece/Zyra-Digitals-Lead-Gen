import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { blogCollectionSchema } from "@/lib/schema";
import { BLOG_POSTS, excerptOf, formatDate, readingTime } from "@/lib/blog";
import { PAGE_BANNERS } from "@/lib/banners";

const Blogs = () => (
  <div>
    <SEO
      title="Blog - Website Design & SEO Guides from Zyra Digitals"
      description="Practical guides on website design, local SEO and getting found on Google and AI search, written for businesses in Coimbatore and across India."
      keywords="website design blog, SEO guides, local SEO Coimbatore, AI search optimisation, website cost guide, web design tips"
      canonical="/blogs"
      breadcrumbs={[{ name: "Blog", path: "/blogs" }]}
      schema={blogCollectionSchema(
        BLOG_POSTS.map((p) => ({
          title: p.h1,
          path: `/blogs/${p.slug}`,
          datePublished: p.datePublished,
        }))
      )}
    />

    <PageBanner
      image={PAGE_BANNERS.blog}
      title="Insights & Guides"
      subtitle="Practical advice on websites and SEO - how to get discovered on Google and AI search, and turn that visibility into enquiries."
      badge="Zyra Digitals Blog"
    />

    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
              Latest Articles
            </p>
            <h2 className="mb-4 text-foreground">Straightforward answers for business owners</h2>
            <p className="text-muted">
              No jargon and no inflated promises - just clear, accurate explanations of what actually
              helps a business get found online.
            </p>
          </div>
        </FadeInView>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <FadeInView key={post.slug} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-medical ring-1 ring-primary/10 transition-transform duration-300 hover:-translate-y-1">
                <Link to={`/blogs/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {post.category}
                  </span>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
                    <Link to={`/blogs/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.h1}
                    </Link>
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{excerptOf(post)}</p>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} className="text-primary" />
                      {formatDate(post.datePublished)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-primary" />
                      {readingTime(post)} min read
                    </span>
                  </div>

                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Read article <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Have a question about your website or SEO?"
      subtitle="Tell us about your business and we'll give you a straight answer on how to bring in more enquiries - reply guaranteed within 1 hour, with a free, no-obligation quote if you'd like one."
      buttonText="Get a Free Quote"
      to="/contact"
    />
  </div>
);

export default Blogs;
