import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Title } from "../components/title";
import { WordDefinitionCard } from "../components/word-definition-card";
import SearchBox from "../components/search-box";
import { useState } from "react";

export default function Home() {
  const [wordToDefine, setWordToDefine] = useState("");
  const [wordDefinitions, setWordDefinitions] = useState(undefined);
  const [requestIsPending, setRequestIsPending] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);

  const FREE_DICTIONARY_BASE_URL =
    "https://api.dictionaryapi.dev/api/v2/entries/en/";

  function getWordDefinition() {
    setRequestIsPending(true);
    axios
      .get(FREE_DICTIONARY_BASE_URL + wordToDefine.toLowerCase())
      .then((res) => {
        setWordNotFound(false);
        setWordDefinitions(res.data);
      })
      .catch((reason) => {
        setWordDefinitions(undefined);
        if (reason.response.status === 404) {
          setWordNotFound(true);
        } else {
          console.error(reason);
        }
      })
      .finally(() => {
        setRequestIsPending(false);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Define-a-word</title>
        <meta
          name="description"
          content="Define-a-word (Very Simple Dictionary)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title title="Define-a-word" subtitle="Very Simple Dictionary">
        <Image src="/images/logo.png" height={128} width={128} alt="Logo" />
      </Title>
      <SearchBox
        placeholder="word to define"
        buttonText="Define"
        onChange={(value) => {
          setWordToDefine(value);
        }}
        onSearch={(value) => {
          getWordDefinition(value);
        }}
        disabled={requestIsPending}
      />
      {wordDefinitions !== undefined
        ? wordDefinitions.map((wordDefinition, i) => (
            <WordDefinitionCard
              key={`word-definition-card-${i}`}
              wordDefinition={wordDefinition}
            />
          ))
        : wordNotFound && (
            <div className={styles.wordNotFound}>
              <p>Word "{wordToDefine}" not found ¯\_(ツ)_/¯</p>
            </div>
          )}
    </div>
  );
}
