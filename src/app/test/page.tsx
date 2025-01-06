type TestPageProps = {
  title: string;
  text: string;
  url: string;
};

type Params = Promise<Partial<TestPageProps>>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type PageProps = {
  params: Params;
  searchParams: SearchParams;
};

export default async function TestPage(props: PageProps) {
  const { params, searchParams } = props;

  return (
    <div className="min-h-dvh m-2">
      <h1>Test ページ</h1>

      <div className="m-2 rounded-md bg-gray-100 p-4">
        params
        <pre>
          <code>{JSON.stringify(params, null, 2)}</code>
        </pre>
      </div>
      <div className="m-2 rounded-md bg-gray-100 p-4">
        searchParams
        <pre>
          <code>{JSON.stringify(searchParams, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
