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
        const res = await uploadFile({ video, fromLang });
        if (res) {
            setId(res.id);
            setTranscription(res.captions);
        }
    };

    return (
        <div className="p-5 w-96 rounded-lg bg-white/50 backdrop-blur-sm">
          <h1 className="text-2xl text-center mb-5">Upload a video</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
            <div className="flex flex-col justify-between h-full gap-2">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
              />
              <select
                value={fromLang}
                onChange={(e) => setFromLang(e.target.value)}
                className="block px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="en">English</option>
                <option value="zh">Mandarin</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
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
