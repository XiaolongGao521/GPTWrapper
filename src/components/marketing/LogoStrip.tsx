const logos = ["Accord", "Northstar", "Metaform", "Cloudtype", "Signal", "Stripe-ish"];

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="container">
        <p className="text-center text-[11px] font-bold uppercase text-muted-foreground">
          The #1 professional wrapper posture trusted by
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground"
            >
              <span className="size-4 rounded-[0.22rem] border border-border bg-secondary" />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
