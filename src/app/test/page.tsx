"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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

export default function TestPage(props: PageProps) {
  return (
    <div className="min-h-dvh m-2">
      <header>
        <Link href={"/"}>HOME</Link>
      </header>
      <h1>Test ページ</h1>

      <Suspense fallback={<div>loading...</div>}>
        <CodeComp />
      </Suspense>
    </div>
  );
}

const CodeComp = () => {
  // --- test用 ---
  const params = useSearchParams()
  const title = params.get("title")
  const text = params.get("text")
  const url = params.get("url")

  console.log("title:",title)
  console.log("text:",text)
  console.log("url:",url)
  // -------

  const searchParams = Object.fromEntries(useSearchParams().entries());

  return (
    <div className="m-2 rounded-md bg-gray-100 p-4">
      searchParams
      <pre>
        <code>{JSON.stringify(searchParams, null, 2)}</code>
      </pre>

      <pre>
        <code>title:{title}</code>
        <code>text:{text}</code>
        <code>url:{url}</code>
      </pre>
    </div>
  );
};
