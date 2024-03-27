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
    text: "The printing press allowed for books to be manufactured at faster speeds which enabled a significant price decrease (Hippe, 2015). The astonishing increase in production effectively made literature available to anyone and as a result, people had the motivation to learn how to read and write. Before printing, 1 in 10 people could not read but after the introduction of the printing press, the literature rate rose (Cartwright, 2024). Printing brought books to the household where otherwise scholars would have to travel to acquire them (Cartwright, 2024).",
    photoName: "many_books.jpg",
  },
  {
    title: "Minimize Errors",
    text: "Before the printing press, monks were the ones responsible for copying a writer’s work into a paper. When copying someone's work, there is always a possibility of accidentally forgetting a word or letter. This led to many mistakes in the writing and affected many of the books’ outcomes which made the readings inaccurate to the writers’ work. Those errors present in works were minimized with the introduction of the printing press (Osei-Hwere & Osei-Hwere). Work was now reliable and could be cited that would spark collaboration that is going to be discussed briefly.",
    photoName: "error.jpg",
  },
  {
    title: "Diversification of Language in Literature",
    text: "Latin had been the language chosen by the scholars for literature and this was a clear barrier for the common person to read literature as only the scholars could read Latin (Kabir, 2024). As printing took off, books started to be printed for non-scholars which began to introduce vernacular languages into literature (Cartwright, 2024). Printing made knowledge accessible in local languages so people didn’t have to learn Latin. The availability of vernacular literature allowed for the standardization of languages (Kabir, 2024). Overall, the regular person could now unlock knowledge that beforehand was being concealed by a language barrier, and this allowed for languages to flourish, become recognized further, and form a distinct cultural identity.",
    photoName: "language.jpg",
  },
  {
    title: "Education",
    text: "Researchers were now able to print and publish their findings so that anyone could analyze and learn from them. The printing press allowed for facts and ideas to be verifiable and writers started to publish their works freely (Osei-Hwere & Osei-Hwere). With the availability of literature, people started to educate themselves with the available knowledge. This led to a more civilized society that was able to coexist. The printing press also made significant advances in the educational systems (Osei-Hwere & Osei-Hwere). The educational system was able to provide standardized and easily reproducible materials that made education uniform through different parts of countries. Additionally, schools could now afford to have libraries and be centers of intellectual exchange (Kabir, 2024). All of these immensely helped the educational system to establish itself as a haven of knowledge and helped contribute to the advancement of knowledge and thinking.",
    photoName: "education.jpg",
  },
  {
    title: "Collaboration",
    text: "Much of the technology today is a product of collaboration. With the power of the printing press, scholars and others alike were able to build upon the knowledge made available from other creators' literature. This melting pot of ideas gave birth to the Scientific Revolution and Enlightenment, increasing global knowledge at rates never seen before (Osei-Hwere & Osei-Hwere). The concept of collaboration that printing helped achieve at a large scale can be compared to the basis of why the internet was started. ",
    photoName: "collaboration.jpg",
  },
  {
    title: "Return The Voice To The People",
    text: "People were given a voice to spread their ideas and contest organizations that previously had control over the flow of information, such as religions or governments. An example is the polarity of the story of John Huss and Martin Luther. Before the printing press, Huss disputed the principles of the church and therefore his works were destroyed, due to the limited copies, and he was burned alive for it, putting an end to his ideas and knowledge. On the other hand, Luther similarly did as Huss had done before him but he had the advantage of the printing press. Luther’s use of the printing press created thousands of pamphlets with his ideas and criticisms of the church which were translated into other languages and reached many people. The widespread criticism proved impossible to contain by the church, so they had to address the claims. As a result, authority and legitimacy once held by the church quickly crumbled (Hippe, 2015). In conclusion, the mass production capability of the printing press allows information to spread faster and makes it harder for censorship by organizations to effectively give a voice to the lower class (Hippe, 2015).",
    photoName: "voice.jpg",
  },
  {
    title: "Cultures coming together and sharing",
    text: "With the rise of printing, knowledge could travel on its own across borders. Literature was no longer bound by hand-made work and printed material could easily be transported and produced. The transportability of printed work allowed for books to carry cultural influence from where they were produced. As they circulate across borders, ideas from different cultures can mix and enhance each other to promote cross-cultural understanding (Kabir, 2024). With the availability of writings from different cultures, people are now able to understand one another better and reduce stereotypes that might have existed prior. Cultures can evolve by sharing and learning from each other and the printing press made the process extremely easy and cheaper.",
    photoName: "cultures.jpg",
  },
];

export default function Contributions() {
  return (
    <div>
      <div className="relative flex justify-center text-center items-center">
        <img
          src="assets/old_books.jpg"
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
      </div>
      <div className="my-16 mx-96 flex justify-center scale-150">
        <Button text="References" to="/references" />
      </div>
    </div>
  );
}
