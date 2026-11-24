import { Check, Star } from "lucide-react";

const GoogleLogo = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.63v3.02h3.86c2.26-2.09 3.56-5.17 3.56-8.89z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.02c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.12A11.99 11.99 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.61H1.29a11.98 11.98 0 0 0 0 10.78l3.98-3.12z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.7 0 3.99 2.47 1.29 6.61l3.98 3.12C6.22 6.86 8.87 4.75 12 4.75z"
    />
  </svg>
);

const reviews = [
  {
    name: "Janice Ida",
    meta: "9 reviews · 8 months ago",
    text: "I reached out to them for logo design and gave my website also to be designed by them after seeing their works. I absolutely loved the outcome, they were patient with all my preferences and got everything done within a short span of time.",
  },
  {
    name: "Ashish Patel",
    meta: "8 reviews · 8 months ago",
    text: "Excellent website designer. Very knowledgeable and great communication throughout. Very professional, but also very fast designer. Made my website much better that I expected, thanks Mohan",
  },
  {
    name: "Avinash",
    meta: "2 reviews · 9 months ago",
    text: "I connected with Zyra Digital for my startup design, he designed with utmost care and delivered on time with a professional look for my website. I'm extremely satisfied with the speed and professionalism.",
  },
  {
    name: "Devang Sankhla",
    meta: "6 reviews · 10 months ago",
    text: "absolutely mind blowing work and very cooperative as well. great rates and work ethic never faced any issue and the responses back to back are in no delay, loved working with zyra digitals for the mvp of my startup!",
  },
  {
    name: "Adnan Tamboli",
    meta: "2 reviews · 10 months ago",
    text: "This agency literally understand every details and made my website and my friends website at very reasonable price, which looks very premium. Highly recommended",
  },
  {
    name: "Arjun S",
    meta: "1 review · 10 months ago",
    text: "Zyra Digital are the besttt, he was able to complete the website in the deadline and he was able to deliver clean, professional, and user friendly websites. I highly recommend Zyra Digitals to anyone looking to create best websites",
  },
  {
    name: "Linda",
    meta: "2 reviews · 9 months ago",
    text: "The website crafted for my dental agency is EXCELLENT. It is well-structured, visually strong, interactive and clearly made with care. Very professional and friendly. I am truly grateful for such high-quality work. I will definitely recommend Zyra Digitals. Whatever your background either novice or intermediate or expect do get in touch. There is room for everyone. Wishing u all the best in your future endeavours.",
  },
];

const Stars = () => (
  <div className="flex gap-1" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
    ))}
  </div>
);

const GoogleReviews = () => (
  <section className="overflow-hidden bg-blue-50 py-16 sm:py-20">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-foreground">What Our Clients Say</h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <GoogleLogo size={26} />
          <Stars />
          <span className="text-lg font-bold text-foreground">5.0</span>
          <span className="text-xs font-medium text-muted">· Verified Google Reviews</span>
        </div>
      </div>
    </div>

    {/* Single row scrolling right-to-left */}
    <div className="relative w-full overflow-hidden">
      {/* Subtle edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-blue-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-blue-50 to-transparent" />

      <div className="animate-marquee-slow flex items-stretch gap-6 py-4">
        {[...reviews, ...reviews].map((review, idx) => (
          <article
            key={`${review.name}-${idx}`}
            className="flex h-[320px] w-[350px] sm:h-[340px] sm:w-[420px] shrink-0 flex-col rounded-2xl bg-card p-7 shadow-medical ring-1 ring-primary/10 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <Stars />
              <span
                className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200"
                title="Verified Google review"
                aria-label="Verified Google review"
              >
                <GoogleLogo size={17} />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-2 ring-card">
                  <Check size={10} strokeWidth={4} className="text-white" />
                </span>
              </span>
            </div>
            <p className="mt-4 line-clamp-5 text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
              “{review.text}”
            </p>
            <div className="mt-auto flex items-center gap-3.5 border-t border-border pt-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                {review.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-foreground">{review.name}</p>
                <p className="truncate text-xs sm:text-sm text-slate-500 font-medium">{review.meta}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviews;
