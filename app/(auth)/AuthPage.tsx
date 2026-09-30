type AuthPageProps = {
  title: string;
  description: string;
};

export default function AuthPage({ title, description }: AuthPageProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 py-16 text-center">
      <div className="w-full max-w-[420px] rounded-2xl border border-neutral-200 bg-white p-8">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
