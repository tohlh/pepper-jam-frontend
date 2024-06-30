'use client'

type VideoPreviewCardProps = {
  videoLink: string;
};

export default function VideoPreviewCard({ videoLink } : VideoPreviewCardProps) {
  return (
    <div>
      <iframe src={videoLink} />
    </div>
  );
}
