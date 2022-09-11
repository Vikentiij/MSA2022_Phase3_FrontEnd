import React from "react";
import { WordDefinitionCard } from "../components/word-definition-card";

export default {
  title: "MY COMPONENTS/WordDefinitionCard",
  component: WordDefinitionCard,
};

const Template = (args) => <WordDefinitionCard {...args} />;

export const Ant = Template.bind({});
Ant.args = {
  wordDefinition: {
    word: "ant",
    phonetic: "/ɛnt/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "Any of various insects in the family Formicidae in the order Hymenoptera, typically living in large colonies composed almost entirely of flightless females.",
          },
          { definition: "A Web spider.", synonyms: [], antonyms: [] },
        ],
        synonyms: ["emmet", "pismire"],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition:
              "To rub insects, especially ants, on one's body, perhaps to control parasites or clean feathers.",
          },
        ],
        synonyms: [],
      },
    ],
  },
};

export const React_ = Template.bind({});
React_.args = {
  wordDefinition: {
    word: "react",
    phonetic: "/ɹiːˈækt/",
    phonetics: [{ text: "/ɹiːˈækt/", audio: "" }],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "An emoji used to express a reaction to a post on social media.",
          },
        ],
        synonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition:
              "To act or perform a second time; to do over again; to reenact.",
          },
          {
            definition:
              "To return an impulse or impression; to resist the action of another body by an opposite force",
          },
          {
            definition:
              "To act upon each other; to exercise a reciprocal or a reverse effect, as two or more chemical agents; to act in opposition.",
          },
          {
            definition:
              "To cause chemical agents to react; to cause one chemical agent to react with another.",
          },
        ],
        synonyms: [],
      },
    ],
  },
};
