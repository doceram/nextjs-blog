import Head from "next/head";
import Link from "next/link.js";
import Date from "../components/date.js";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm <strong>Tharun</strong>. I'm a software developer at
          ETVBharat, Hyderabad
        </p>
        <p>
          (This is a sample website - I build few days ago{" "}
          <Link href={`/posts/${allPostsData[0].id}`}>Go to first post</Link>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg}`}>Blog</h2>

        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// this function fetches necessary data for the home page and passes it as props
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
