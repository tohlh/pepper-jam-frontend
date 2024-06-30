'use client'

import { useState } from "react";
import { generateVideo, updateTranscription } from "@/services/ApiClient";

type TranslationFormProps = {
  id: string;
  transcription: string;
  setVideoLink: (videoLink: string) => void;
};

export default function TranslationForm({ id, transcription, setVideoLink } : TranslationFormProps) {
  const [captions, setCaptions] = useState(transcription);
  const [fromLang, setFromLang] = useState("en");

  const [translation, setTranslation] = useState("");
  const [toLang, setToLang] = useState("zh");

  const handleTranslate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!captions) {
      return;
    }
    const res = await updateTranscription({ id, captions, fromLang, toLang });
    if (res) {
      setTranslation(res.translation);
    }
  };

  const handleGenerate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!translation) {
      return;
    }

    const res = await generateVideo({ id, toLang, translation });
    if (res) {
      setVideoLink(translation);
    }
  }

  return (
    <form onSubmit={handleTranslate}>
      <select value={fromLang} onChange={e => setFromLang(e.target.value)}>
        <option value="en">English</option>
        <option value="zh">Mandarin</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
      </select>
      <textarea value={captions} onChange={e => setCaptions(e.target.value)} />

      <select value={toLang} onChange={e => setToLang(e.target.value)}>
        <option value="en">English</option>
        <option value="zh">Mandarin</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
      </select>
      <textarea value={translation} readOnly />
      <button type="submit">Translate</button>
      <button onClick={handleGenerate}>Generate</button>
    </form>
  );
}
