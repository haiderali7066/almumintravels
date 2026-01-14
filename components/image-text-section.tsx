export function ImageTextSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-center bg-cover"
      style={{
        backgroundImage: "url('/pilgrims-prayer-mosque-spiritual.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="max-w-3xl space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Spiritual Responsibility, Worldly Comfort
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            We understand that pilgrimage is a sacred journey requiring both
            spiritual preparation and practical comfort. Our packages are
            designed with this balance in mind.
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            From the moment you depart the UK to your return home, every detail
            is carefully orchestrated by experienced professionals.
          </p>

          <ul className="pt-4 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Experienced guides with deep spiritual knowledge</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Carefully selected hotels near holy sites</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Seamless visa and documentation support</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>24/7 on-ground emergency support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
