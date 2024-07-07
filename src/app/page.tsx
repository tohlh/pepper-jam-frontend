"use client";

import { useState } from "react";
import UploadForm from "@/components/UploadForm";
import TranscriptionForm from "@/components/TranslationForm";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import FancySlogan from "@/components/FancySlogan";
import Hero from "@/components/Hero";

export default function Home() {
    const [id, setId] = useState("");
    const [transcription, setTranscription] = useState("");

    return (
        <AuroraBackground>
            <main className="flex min-h-screen flex-col items-center gap-5 p-10">
                <FancySlogan />
                <Hero />
                <UploadForm setId={setId} setTranscription={setTranscription} />
                <TranscriptionForm
                    id={id}
                    transcription={transcription}
                />
            </main>
        </AuroraBackground>
    );
}
