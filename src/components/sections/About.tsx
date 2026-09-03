export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Building things people actually use
        </h2>
        <div className="space-y-4 text-gray-500 leading-relaxed max-w-3xl">
          <p>
            React Native engineer based in Noida, India. Spent the last 2 years building
            production mobile apps: commerce platforms, AI-powered tools, sports ecosystems,
            and my own money companion app.
          </p>
          <p>
            I care about shipping working software. Understanding the product, not just the
            ticket. Writing code that is maintainable, handling edge cases, and staying
            involved after something goes live.
          </p>
          <p>
            Outside of client work, I build{' '}
            <a href="https://kash.appmatters.in" target="_blank" rel="noreferrer"
              className="text-violet-600 hover:text-violet-700 transition-colors font-medium">
              Kash
            </a>
            {' '}- a money companion app on the App Store and Google Play, designed, built,
            and shipped solo.
          </p>
        </div>
      </div>
    </section>
  )
}
