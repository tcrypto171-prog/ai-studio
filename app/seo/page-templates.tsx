type PageTemplateProps = {
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

export default function PageTemplate({
  title,
  subtitle,
  content,
}: PageTemplateProps) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <section className="text-center mb-20">

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          {subtitle}
        </p>

      </section>

      <section className="prose prose-invert max-w-none">

        {content}

      </section>

    </main>
  );
}