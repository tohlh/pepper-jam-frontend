'use client'

import { useState } from 'react';
import { uploadFile } from '../services/ApiClient';

type UploadFormProps = {
  setId: (id: string) => void;
  setTranscription: (transcription: string) => void;
}

export default function UploadForm({ setId, setTranscription }: UploadFormProps) {
  const [video, setVideo] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setVideo(file || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!video) {
      return;
    }
    const res = await uploadFile({ video });
    if (res) {
      setId(res.id);
      setTranscription(res.captions);
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
