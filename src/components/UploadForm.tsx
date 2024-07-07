"use client";

import { useState } from "react";
import { uploadFile } from "../services/ApiClient";
import { FaUpload } from "react-icons/fa";
import BorderButton from "./ui/BorderButton";

type UploadFormProps = {
  setId: (id: string) => void;
  setTranscription: (transcription: string) => void;
};

export default function UploadForm({
  setId,
  setTranscription,
}: UploadFormProps) {
  const [video, setVideo] = useState<File | null>(null);

  const [fromLang, setFromLang] = useState("en");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setVideo(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!video) {
      return;
    }
    try {
      const res = await uploadFile({ video, fromLang });
      console.log(res);
      if (res) {
        setId(res.id);
        setTranscription(res.captions);
      }
    } catch (err: any) {
      for (const key in err) {
        console.log(key, err[key]);
      }
      console.error(err);
    }
  };

  return (
    <div className="p-5 w-96 rounded-lg bg-white/50 backdrop-blur-sm">
      <h1 className="text-2xl text-center mb-5">Upload a video</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
        <div className="flex flex-col justify-between h-full gap-2">
          <input type="file" accept="video/*" onChange={handleFileChange} />
          <label className="mt-2 mb-0">Translate from:</label>
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="block px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="en">English</option>
            <option value="zh-cn">Chinese</option>
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
            <option value="ru">Russian</option>
          </select>
          <BorderButton
            title="Upload"
            icon={<FaUpload />}
            position="left"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
