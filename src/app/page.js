"use client";
import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <AudioPlayer url="/sample-9s.mp3" />
    </div>
  );
}
