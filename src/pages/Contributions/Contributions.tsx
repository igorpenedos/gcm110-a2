import React from "react";
import { Contribution } from "../../components/Contribution/Contribution";
import { Button } from "../../components/Button/Button";

interface ContrinutionData {
  title: string;
  text: string;
  photoName: string;
}

const contributions: ContrinutionData[] = [
  {
    title: "Increased Accessibility & Reduced Price",
    text: "The printing press allowed for books to be manufactured at faster speeds which enabled a significant price decrease (Hippe, 2015). Before printing, 1 in 10 people could not read but after the introduction of the printing press, the literature rate rose (Cartwright, 2024). Printing brought books to the household where otherwise only scholars would be able to travel to acquire them (Cartwright, 2024).",
    photoName: "many_books.jpg",
  },
  {
    title: "Minimize Errors",
    text: "Before the printing press, monks were the ones responsible for copying a writer’s work into a paper. When copying someone's work, there is always a possibility of accidentally forgetting a word or letter. This led to many mistakes in the writing and affected many of the books’ outcomes which made the readings inaccurate to the writers’ work. Those errors present in works were minimized with the introduction of the printing press (Osei-Hwere & Osei-Hwere). Work was now reliable and could be cited that would spark collaboration that is going to be discussed briefly.",
    photoName: "error.jpg",
  },
  {
    title: "Diversification of Language in Literature",
    text: "Latin had been the language chosen by the scholars for literature and this was a clear barrier for the common person to read literature as only the scholars could read Latin (Kabir, 2024). As printing took off, books started to be printed for non-scholars by introducing vernacular languages into literature (Cartwright, 2024). Printing made knowledge accessible in local languages so Latin was no longer required to access information. The availability of vernacular literature allowed for the standardization of languages (Kabir, 2024). Overall, the regular person could now unlock knowledge that beforehand was being concealed by a language barrier, and this allowed for languages to flourish, become recognized further, and form a distinct cultural identity.",
    photoName: "language.jpg",
  },
  {
    title: "Education",
    text: "Researchers were now able to print and publish their findings so that anyone could analyze and learn from them. The printing press allowed for facts and ideas to be verifiable and writers started to publish their works freely. With the availability of literature, people started to educate themselves which led to a more civilized society that was able to coexist. Furthermore, the printing press made significant advances in the educational systems (Osei-Hwere & Osei-Hwere). The educational system was able to provide standardized and easily reproducible materials that made education uniform. Additionally, schools could now afford to have libraries and be centers of intellectual exchange (Kabir, 2024). All of these immensely helped the educational system to establish itself as a haven of knowledge and helped contribute to the advancement of knowledge.",
    photoName: "education.jpg",
  },
  {
    title: "Collaboration",
    text: "Much of the technology today is a product of collaboration. With the power of the printing press, scholars and others alike were able to build upon the knowledge made available from other creators' literature. This melting pot of ideas gave birth to the Scientific Revolution and Enlightenment, increasing global knowledge at rates never seen before (Osei-Hwere & Osei-Hwere). The concept of collaboration that printing helped achieve at a large scale can be compared to the basis of why the internet was started.",
    photoName: "collaboration.jpg",
  },
  {
    title: "Cultures coming together and sharing",
    text: "With the rise of printing, knowledge could travel on its own across borders. Literature was no longer bound by hand-made work and printed material could easily be transported and produced. The transportability of printed work allowed for books to carry cultural influence from where they were produced. As they circulate across borders, ideas from different cultures can mix and enhance each other to promote cross-cultural understanding (Kabir, 2024). With the availability of culturally different writings, cultures could evolve through sharing and learning from one another.",
    photoName: "cultures.jpg",
  },
  {
    title: "Preserve Knowledge",
    text: "Mass production of printer work allowed knowledge to extend its lifetime. Literature before the printing press was subjected to destruction due to fire, the passage of time and many other factors, but with mass production, the texts could survive beyond their original works (Kabir, 2024). So much knowledge and history have been long over centuries but printing permitted knowledge to live on for generations so others could utilize and learn from it.",
    photoName: "preserve.jpg",
  },
];

export default function Contributions() {
  return (
    <div>
      <div className="relative flex justify-center text-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/old_books.jpg`}
          alt="books"
          className="h-96 w-full object-cover brightness-50"
        />
        <div className="absolute text-8xl text-secondary font-semibold drop-shadow">
          <h1 className="text-tertiary">Contributions</h1>
          <h1>to the</h1>
          <h1>
            Global <span className="text-tertiary">Knowledge</span>
          </h1>
        </div>
      </div>
      <div className="mt-16">
        {contributions.map((contribution: ContrinutionData, index) => (
          <div
            key={index}
            className={`px-96 py-24 w-98 flex ${
              index % 2
                ? "bg-secondary text-primary flex-row-reverse"
                : "flex-row"
            }`}
          >
            <Contribution
              title={contribution.title}
              text={contribution.text}
              isEven={Boolean(index % 2)}
              imageName={contribution.photoName ? contribution.photoName : ""}
            />
          </div>
        ))}
        <div className="pt-6 w-98 flex bg-secondary text-primary flex-col text-center">
          <h2 className="text-3xl text-tertiary font-bold text-center">
            Duality of Censorship
          </h2>
          <div className="flex flex-row mt-4 relative">
            <div className="absolute flex w-full h-full justify-center items-center tracking-widest text-primary text-3xl font-bold z-10">
              <span className="text-tertiary">V</span>S
            </div>
            <div className="w-1/2 pl-80 pr-8 py-24 bg-primary text-secondary">
              <h3 className="text-2xl text-tertiary font-semibold">
                Return The Voice To The People
              </h3>
              <p className="text-lg mt-6">
                People were given a voice to spread their ideas and contest
                organizations that previously controlled the flow of
                information, such as religions or governments. An example is the
                polarity of the story of John Huss and Martin Luther. Before the
                printing press, Huss disputed the principles of the church so
                his works were destroyed therefore putting an end to his ideas
                and knowledge as a result of the limited copies. On the other
                hand, Luther did as Huss had done before him except he utilized
                the printing press to create thousands of pamphlets with his
                ideas and criticisms of the church that were translated into
                other languages. The mass production proved impossible to be
                contained by the Catholic Church’s censorship. As a result,
                authority and legitimacy quickly crumbled. In conclusion, the
                mass production capability of the printing press allows
                information to spread faster and hinders censorship by
                organizations, returning the voice to the people (Hippe, 2015).
              </p>
            </div>
            <div className="w-1/2 pr-80 pl-8 bg-tertiary text-secondary py-24">
              <h3 className="text-2xl text-primary font-semibold">
                Evolution of Censorship
              </h3>
              <p className="text-lg mt-6">
                As the common person gained a voice, authorities adapted their
                censorship and ensured to establish barriers to information they
                deemed dangerous. The following are some ways censorship
                evolved: texts began to be checked before they were printed,
                licenses for printing were required by some authorities, and
                books were banned that would result in punishments if caught
                owning or reading (Cartwright, 2024). The evolution of
                censorship is a trend that still impedes the access to
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 mx-96 flex justify-center scale-150">
        <Button text="References" to="/references" />
      </div>
    </div>
  );
}
