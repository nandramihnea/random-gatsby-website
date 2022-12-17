import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Space from "../../images/space.svg";
import { useStaticQuery, graphql } from "gatsby";

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
  console.log("🚀 ~ file: page3.js:22 ~ Page3 ~ pageInfo", pageInfo)

  const { setPageNumber, setTimer, shouldShowSvg, timer } =
    useAppContext();

  useEffect(() => {
    setTimer(4000);
  }, []);

  const onClickHandler = () => {
    setPageNumber(1);
  };

  return (
    <div>
      <h1 className="text-6xl">{pageInfo.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageInfo.html }} />

      <div className="bg-lime-200 rounded-xl p-8 w-fit">
        <p className="text-xl pb-8">Can't get enough of this masterpiece?</p>
        <button
          className="bg-green-600 text-lg text-slate-200 px-6 py-3 rounded-lg"
          onClick={onClickHandler}
        >
          Start over
        </button>
      </div>
      {/* {shouldShowSvg && <Space />} */}
    </div>
  );
};

export default Page3;
