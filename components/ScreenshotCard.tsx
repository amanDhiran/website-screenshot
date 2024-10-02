import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Screenshot } from "./Hero";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Prop {
  screenshot: Screenshot;
}

export function ScreenshotCard({ screenshot }: Prop) {
  return (
    <Card className="pt-6">
        <h3 className="text-lg ml-6 font-semibold capitalize mb-5">{screenshot.device}</h3>
      <CardContent className="flex flex-col justify-between gap-4 items-center">
        <div className="relative overflow-hidden flex justify-center">
          <Image
            src={screenshot.url}
            alt={`Screenshot for ${screenshot.device}`}
            // layout="fill"
            // objectFit="contain"
            height={400}
            width={500}
            className={cn("rounded-lg border", screenshot.device === "mobile"? "max-w-[250px] h-auto" : "",
                screenshot.device === "tablet" ? "max-w-[300px] h-auto" : "")}
          />
        </div>
        <div className="h-full ">
            <Button className="w-72">
          <a
            href={screenshot.url}
            download={`screenshot-${screenshot.device}.jpg`}
          >
            Download
          </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
