import React from "react";
import BlogDetailsContent from "../components/blog/BlogDetailsContent";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-knob-content-item?_id=${id}`,
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
export default BlogDetails;
