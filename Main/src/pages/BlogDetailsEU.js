import React from "react";
import BlogDetailsContent from "../components/blog/BlogDetailsContent";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogDetailsEu = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-international-content-item?_id=${id}`,
    fetcher
  );

  return (
    <>
      <SEO title="Блог" />
      <Layout>
        <div className="rn-blog-details-area">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error...</div>}
          {data && <BlogDetailsContent data={data.results} />}
        </div>
      </Layout>
    </>
  );
};
export default BlogDetailsEu;
