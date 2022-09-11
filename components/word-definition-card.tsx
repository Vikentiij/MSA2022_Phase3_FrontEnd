import styles from "./word-definition-card.module.css";

type WordMeaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
  }[];
  synonyms: string[];
  antonyms: string[];
};

type WordDefinition = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  origin: string;
  meanings: WordMeaning[];
};

function WordMeaningCard(props: { meaning: WordMeaning; addDivider: boolean }) {
  return (
    <div>
      {props.addDivider && <hr className={styles.hr} />}
      <p className={styles.partOfSpeech}>{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map((definition: any, i: number) => (
        <p className={styles.cardText} key={`word-definition-${i}`}>
          {definition.definition}
        </p>
      ))}
      {props.meaning.synonyms.length > 0 && (
        <span>
          <p className={styles.synonyms}>synonyms</p>
          <p className={styles.cardText}>{props.meaning.synonyms.join(", ")}</p>
        </span>
      )}
    </div>
  );
}

export const WordDefinitionCard = (props: {
  wordDefinition: WordDefinition;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <h3 className={styles.word}>{props.wordDefinition.word}</h3>
        <div className={styles.phonetic}>{props.wordDefinition.phonetic}</div>
        {props.wordDefinition.meanings.map((meaning, i) => (
          <WordMeaningCard
            key={`word-meaning-${i}`}
            meaning={meaning}
            addDivider={i > 0}
          />
        ))}
      </div>
    </div>
  );
};
