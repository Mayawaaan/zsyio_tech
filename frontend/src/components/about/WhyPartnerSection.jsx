import { useData } from "../../context/DataContext";

const WhyPartnerSection = () => {
  const { globalData, loading } = useData();

  // 1️⃣ Handle loading state
  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-sm text-muted-foreground">
          Loading partnership details...
        </p>
      </section>
    );
  }

  // 2️⃣ Extract data safely
  const whyPartner = globalData?.aboutData?.whyPartner;

  // 3️⃣ If data missing, show fallback (instead of silent empty UI)
  if (!whyPartner || !whyPartner.reasons?.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-sm text-red-400">
          Partnership data unavailable.
        </p>
      </section>
    );
  }

  const { reasons, tags = [] } = whyPartner;

  return (
    <section className="relative py-20 md:py-24 bg-linear-to-b from-[hsl(var(--base))] to-[hsl(var(--mantle))] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <header className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Why Partner with Zsyio?
          </h2>
        </header>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.id}
              className="rounded-2xl border p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">
                {reason.title}
              </h3>
              <p className="text-sm mt-2">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyPartnerSection;
