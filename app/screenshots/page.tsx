"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; // RootState type for accessing the Redux store
import { ScreenshotCard } from "@/components/ScreenshotCard";
import { useRouter } from "next/navigation";

export default function ScreenshotsPage() {
  const screenshots = useSelector((state: RootState) => state.screenshots.screenshots);
  const router = useRouter()
  if(screenshots.length < 1){
    router.push("/")
  }
  return (
    <div className="container mx-auto min-h-[90vh] py-10">
      <h1 className="text-2xl font-bold mb-6">Generated Screenshots</h1>
      <div className="flex flex-col gap-4">
        {screenshots.length > 0 ? (
          screenshots.map((screenshot, index) => (
            <ScreenshotCard screenshot={screenshot} key={index} />
          ))
        ) : (
          <p>No screenshots available.</p>
        )}
      </div>
    </div>
  );
}
