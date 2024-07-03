"use client";

import { useState } from "react";
import UploadForm from "@/components/UploadForm";
import TranscriptionForm from "@/components/TranslationForm";
import VideoPreviewCard from "@/components/VideoPreviewCard";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { GridGlobe } from "@/components/ui/GridGlobe";
import FancySlogan from "@/components/FancySlogan";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import Hero from "@/components/Hero";

export default function Home() {
    const [id, setId] = useState("");
    const [transcription, setTranscription] = useState("");
    const [videoLink, setVideoLink] = useState("");

    return (
        <AuroraBackground>
            <main className="flex min-h-screen flex-col items-center gap-5 p-10">
                <FancySlogan />
                <Hero />
                <UploadForm setId={setId} setTranscription={setTranscription} />
                <TranscriptionForm
                    id={id}
                    transcription={transcription}
                    setVideoLink={setVideoLink}
                />
                <VideoPreviewCard videoLink={videoLink} />
            </main>
        </AuroraBackground>
    );
}
