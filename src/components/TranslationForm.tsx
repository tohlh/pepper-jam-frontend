"use client";

import { useState } from "react";
import { generateVideo, updateTranscription } from "@/services/ApiClient";
import BorderButton from "./ui/BorderButton";
import { BsTranslate } from "react-icons/bs";
import { IoEnterSharp } from "react-icons/io5";

type TranslationFormProps = {
    id: string;
    transcription: string;
    setVideoLink: (videoLink: string) => void;
};

export default function TranslationForm({
    id,
    transcription,
    setVideoLink,
}: TranslationFormProps) {
    const [captions, setCaptions] = useState(transcription);
    const [fromLang, setFromLang] = useState("en");

    const [translation, setTranslation] = useState("");
    const [toLang, setToLang] = useState("zh");

    const handleTranslate = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!captions) {
            return;
        }
        const res = await updateTranscription({
            id,
            captions,
            fromLang,
            toLang,
        });
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
    };

    return (
        <form onSubmit={handleTranslate} className="flex gap-4 p-6 ">
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
            <textarea
                value={captions}
                onChange={(e) => setCaptions(e.target.value)}
                className="block text-center mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your text"
            />

            <select
                value={toLang}
                onChange={(e) => setToLang(e.target.value)}
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
            <textarea
                value={translation}
                readOnly
                className="block text-center mt-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Your result"
            />
            <BorderButton
                title="Translate"
                position="left"
                type="submit"
                icon={<BsTranslate />}
            />
            <BorderButton
                title="Generate"
                position="left"
                icon={<IoEnterSharp />}
                handleClick={handleGenerate}
            />
        </form>
    );
}
