import type { NextPage } from "next";
import ArticleFooter from "../components/ArticleFooter";
import Aside from "../components/Aside";
import PageContainer from "../components/PageContainer";
import styles from "../styles/Article.module.scss";

const Home: NextPage = (props: any) => {
  return (
    <PageContainer>
      <div>
        <div className={styles["content-header-container"]}>
          <div className={styles["content-header"]}>
            <img src="https://miro.medium.com/fit/c/64/64/1*fegbK6HDD8crwrwARuMhaQ.png" />
            <p>
              Published in <a href="#">Javascript Scene</a> ·
              <a href="http://"> Follow</a>
            </p>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["author"]}>
            <img
              src="https://miro.medium.com/fit/c/96/96/1*VZfJFJj5oVmZ5WzlrgSmRg.jpeg"
              alt="author"
            />
            <div className={styles["author-details"]}>
              <p>Eric Elliott</p>
              <p>Oct 3, 2015 · 13 min read</p>
            </div>
          </div>
          <h1 className={styles["title"]}>
            10 Interview Questions Every Javascript Developer Should Know
          </h1>
          <h2 className={styles["subheader"]}>
            AKA: The Keys to Javascript Mastery
          </h2>
          <section className={styles["article"]}>
            <h1>Update: 2020</h1>
            <p>
              In the years since I wrote this article, a lot has changed. When I
              wrote it, lots of developers were coming to JavaScript from
              languages like Java and C++, lacking any understanding of how
              objects work in JavaScript, and trying to apply obsolete patterns,
              such as deeply layered inheritance hierarchies.
            </p>
            <p>
              Thanks in part to warnings from influential software developers
              and framework authors (particularly the authors of React, who
              wisely listened to the warnings and encouraged better alternatives
              such as higher order components and React hooks for idiomatic
              React), the trend of overusing class inheritance in JavaScript has
              mostly died. And it’s missed by nobody.
            </p>
            <p>In recent job interviews, here’s what I do:</p>
            <p>
              <strong>Ask the candidate to build a click counter</strong> using
              any popular framework (React preferred in 2020). This ridiculously
              simple app has one job: keep track of how many times the user has
              clicked the button during the current session. No storage. No
              network I/O. Just count clicks. It is intentionally ridiculously
              simple: We’re not trying to stump the developer — we’re just
              trying to verify that they know how to code. I prefer to do this
              in a pair programming session via a remote Zoom meeting — no use
              flying a candidate to some office just to watch them code.
            </p>

            <figure>
              <iframe
                src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F37rMZSA6oLk%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D37rMZSA6oLk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F37rMZSA6oLk%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube"
                frameBorder="0"
                height="480"
                width="854"
                title="The Profit Principles With Marcus Lemonis | The Profit"
                className="eg aq as ag dq"
                scrolling="auto"
              ></iframe>
            </figure>

            <ol>
              <li>
                <h2>
                  Can you name two programming paradigms important for
                  Javascript app developers?
                </h2>
                <p>
                  JavaScript is a multi-paradigm language, supporting
                  imperative/procedural programming along with OOP
                  (Object-Oriented Programming) and functional programming.
                  JavaScript supports OOP with prototypal inheritance.
                </p>
                <p>
                  <strong>Good to hear:</strong>
                </p>
                <ul>
                  <li>Prototypal inheritance (also: prototypes, OLOO).</li>
                  <li>
                    Functional programming (also: closures, first class
                    functions, lambdas).
                  </li>
                </ul>
                <p>
                  <strong>Red flags:</strong>
                </p>
                <ul>
                  <li>
                    No clue what a paradigm is, no mention of prototypal oo or
                    functional programming.
                  </li>
                </ul>
                <p>
                  <strong>Learn More:</strong>
                </p>
                <ul>
                  <li>The Two Pillars of JavaScript Part 1 — Prototypal OO.</li>
                  <li>
                    The Two Pillars of JavaScript Part 2 — Functional
                    Programming.
                  </li>
                </ul>
              </li>
              <li>
                <h2>What is functional programming</h2>
                <p>
                  Functional programming produces programs by composing
                  mathematical functions and avoids shared state & mutable data.
                  Lisp (specified in 1958) was among the first languages to
                  support functional programming, and was heavily inspired by
                  lambda calculus. Lisp and many Lisp family languages are still
                  in common use today.
                </p>
                <p>
                  Functional programming is an essential concept in JavaScript
                  (one of the two pillars of JavaScript). Several common
                  functional utilities were added to JavaScript in ES5.
                </p>
              </li>
            </ol>
          </section>
        </div>
        <ArticleFooter />
      </div>
      <Aside>
        <div>
          <div className={styles["buttons-container"]}>
            <button className={styles["get-started"]} type="button">
              Get started
            </button>
            <button className={styles["sign-in"]} type="button">
              Sign In
            </button>
          </div>
          <div className={styles["related-container"]}>
            <div className={styles["related-author-container"]}>
              <div className={styles["search-container"]}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="rgba(8, 8, 8, 1)"
                >
                  <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
                </svg>
                <input type="search" placeholder="Search" />
              </div>
              <img
                src="https://miro.medium.com/fit/c/96/96/1*VZfJFJj5oVmZ5WzlrgSmRg.jpeg"
                alt="author"
              />
              <h2>Eric Elliott</h2>
              <p>108K Followers</p>
              <p>Make some magic. #Javascript</p>
              <div className={styles["subscription-buttons"]}>
                <button type="button" className={styles["follow-button"]}>
                  Follow
                </button>
                <button type="button" className={styles["subscription-button"]}>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    className="oe nz oa"
                  >
                    <rect
                      x="26.25"
                      y="9.25"
                      width="0.5"
                      height="6.5"
                      rx="0.25"
                      strokeWidth="0.5"
                    ></rect>
                    <rect
                      x="29.75"
                      y="12.25"
                      width="0.5"
                      height="6.5"
                      rx="0.25"
                      transform="rotate(90 29.75 12.25)"
                      strokeWidth="0.5"
                    ></rect>
                    <path
                      d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"
                      strokeLinecap="round"
                    ></path>
                    <path d="M11.5 14.5L19 20l4-3" strokeLinecap="round"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles["related-articles"]}>
              <h2>Related</h2>
              <div className={styles["related-items"]}>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
                <div className={styles["related-item"]}>
                  <img
                    src="https://miro.medium.com/focal/58/58/50/50/0*SYbbtHZcvbFB0fHR.jpg"
                    alt="related article"
                  />
                  <p>Currying for Javascript Developers with Examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aside>
    </PageContainer>
  );
};

export default Home;
