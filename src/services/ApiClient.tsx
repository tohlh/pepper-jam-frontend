import { env } from "process";

const API_URL = env.API_URL || "http://localhost:3000";

export type UploadRequest = {
    fromLang: string;
    video: File;
};

export type UploadResponse = {
    id: string;
    captions: string;
};

export async function uploadFile({ video, fromLang }: UploadRequest) {
    const formData = new FormData();
    formData.append("video", video);
    formData.append("fromLang", fromLang);

    const response = await fetch(API_URL + "/api/upload", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        window.alert("Failed to upload file");
    }

    return response.json();
}

export type TranslationRequest = {
    id: string;
    captions: string;
    toLang: string;
};

export type TranslationResponse = {
    id: string;
    toLang: string;
    translation: string;
};

export async function updateTranscription({
    id,
    captions,
    toLang,
}: TranslationRequest) {
    const response = await fetch(API_URL + "/api/transcription", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, captions, toLang }),
    });

    if (!response.ok) {
        window.alert("Failed to translate transcription");
    }

    return response.json();
}

export type GenerateRequest = {
    id: string;
    toLang: string;
    translation: string;
};

export type GeneratedResponse = {
    id: string;
    url: string;
};

export async function generateVideo({
    id,
    toLang,
    translation,
}: GenerateRequest) {
    const response = await fetch(API_URL + "/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, toLang, translation }),
    });

    if (!response.ok) {
        window.alert("Failed to generate video");
    }

    return response.json();
}
