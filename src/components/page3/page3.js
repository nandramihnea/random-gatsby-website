import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Space from "../../images/space.svg";
import { useStaticQuery, graphql } from "gatsby";
import { content } from "./page3.module.css";

const Page3 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const pageInfo = data.allMarkdownRemark.nodes[0];

  const { setTimer, shouldShowSvg } = useAppContext();

  useEffect(() => {
    setTimer(7000);
  }, []);

  const spaceClass = shouldShowSvg ? 'visible' : 'invisible';

  return (
    <div>
      <h1 className="text-5xl mb-10">{pageInfo.frontmatter.title}</h1>
      <div className="grid grid-cols-2 gap-x-40">
        <div
          className={content + " prose max-w-none"}
          dangerouslySetInnerHTML={{ __html: pageInfo.html }}
        />
        <div className="grid justify-items-center items-center">
          <p className="h-max text-blue-900 text-3xl">
            The content from the left side was written in a markdown file called{" "}
            <span className="italic text-yellow-500 bg-slate-700 px-2 rounded-xl text-2xl">
              decent.md
            </span>
            and brought to the page with a graphql query
          </p>
          <Space className={spaceClass + ` animate-bounce`} />
        </div>
      </div>
    </div>
  );
};

export default Page3;
