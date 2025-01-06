type TestPageProps = {
  title: string;
  text: string;
  url: string;
};

type PageProps = {
  params: Promise<Partial<TestPageProps>>;
};

export default async function TestPage({ params }: PageProps) {
  const { title, text, url } = await params;

  return (
    <div className="min-h-dvh m-2">
      <h1>Test ページ</h1>

      <div className="m-2 rounded-md bg-gray-100 p-4">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url}>Link</a>
      </div>
    </div>
  );
}
