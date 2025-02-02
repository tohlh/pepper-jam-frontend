"use client";

import { useEffect, useState } from "react";
import { generateVideo, updateTranscription } from "@/services/ApiClient";
import BorderButton from "./ui/BorderButton";
import { BsTranslate } from "react-icons/bs";
import { IoEnterSharp } from "react-icons/io5";

type TranslationFormProps = {
  id: string;
  transcription: string;
};

export default function TranslationForm({
  id,
  transcription
}: TranslationFormProps) {
  const [captions, setCaptions] = useState(transcription);
  const [translation, setTranslation] = useState("");
  const [toLang, setToLang] = useState("en");
  const [translateLoading, setTranslateLoading] = useState(false)
  const [generateloading, setGenerateLoading] = useState(false)

  useEffect(() => {
    if (transcription) {
      setCaptions(transcription);
    }
  }, [transcription]);

  const handleTranslate = async (event: React.FormEvent) => {
    try {
      setTranslateLoading(true)
      event.preventDefault();
      if (!captions) {
        return;
      }
      const res = await updateTranscription({
        id,
        captions,
        toLang,
      });
      if (res) {
        setTranslation(res.translation);
      }
    } catch (err) {
      console.error(err)
    } finally {
      setTranslateLoading(false)
    }

  };

  const handleGenerate = async (event: React.FormEvent) => {
    try {
      setGenerateLoading(true)
      event.preventDefault();
      if (!translation) {
        return;
      }
      
      await generateVideo({ id, toLang, translation });
    } catch (err) {
      console.error(err)
    } finally {
      setGenerateLoading(false)
    }
  };

  return (
    <div className="p-5 w-96 rounded-lg bg-white/50 backdrop-blur-sm">
      <h1 className="text-2xl text-center mb-5">Transcribe and Translate</h1>
      <form
        onSubmit={handleTranslate}
        className="flex flex-col gap-2 justify-between w-84 h-full"
      >
        <textarea
          value={captions}
          rows={7}
          onChange={(e) => setCaptions(e.target.value)}
          className="block w-84 text-center mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Check Transcription"
        />
        <label className="mt-2 mb-0">Translate to:</label>
        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
          className="block px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="en">English</option>
          <option value="zh-CN">Chinese</option>
          <option value="es">Spanish</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="hi">Hindi</option>
          <option value="id">Indonesian</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="nl">Dutch</option>
          <option value="tr">Turkish</option>
          <option value="tl">Filipino</option>
          <option value="pl">Polish</option>
          <option value="sv">Swedish</option>
          <option value="bg">Bulgarian</option>
          <option value="ro">Romanian</option>
          <option value="cs">Czech</option>
          <option value="el">Greek</option>
          <option value="fi">Finnish</option>
          <option value="hr">Croatian</option>
          <option value="ms">Malay</option>
          <option value="sk">Slovak</option>
          <option value="da">Danish</option>
          <option value="ta">Tamil</option>
          <option value="uk">Ukrainian</option>
          <option value="ru">Russian</option>{" "}
        </select>
        <textarea
          value={translation}
          readOnly
          rows={7}
          className="block text-center mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Translation Result"
        />
        <BorderButton
          loading={translateLoading}
          title="Translate"
          position="left"
          type="submit"
          icon={<BsTranslate />}
        />
        <BorderButton
          loading={generateloading}
          title="Generate"
          position="left"
          icon={<IoEnterSharp />}
          handleClick={handleGenerate}
        />
      </form>
    </div>
  );
}
