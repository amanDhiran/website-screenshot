"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScreenshotCard } from "./ScreenshotCard";
import { useRouter } from "next/navigation";

export type Device = "desktop" | "tablet" | "mobile";

export interface Screenshot {
  device: Device;
  url: string;
}
export function Hero() {
  const [url, setUrl] = useState<string>("");
  const [devices, setDevices] = useState<Device[]>(["desktop"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post<{ screenshots: Screenshot[] }>(
        "/api/screenshot",
        { url, devices }
      );
      setScreenshots(response.data.screenshots);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Error generating screenshots:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeviceToggle = (device: Device) => {
    setDevices((prev) =>
      prev.includes(device)
        ? prev.filter((d) => d !== device)
        : [...prev, device]
    );
  };
  return (
    <>
      <Card className="max-w-lg mb-20 overflow-hidden mx-auto pt-0">
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4"> */}
          <CardHeader>
            <Label htmlFor="url" className="text-primary font-medium">
              Website URL
            </Label>
            <Input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              required
            />
          </CardHeader>
          {/* </div> */}

          {/* <div className="mb-4"> */}
          <CardContent>
            <Label className="text-primary font-medium">Select devices</Label>
            <div className="flex gap-3 mt-2">
              {(["desktop", "tablet", "mobile"] as const).map((device) => (
                <div key={device} className="flex items-center">
                  <Checkbox
                    id={device}
                    checked={devices.includes(device)}
                    onCheckedChange={() => handleDeviceToggle(device)}
                  />
                  <Label htmlFor={device} className="ml-2 capitalize">
                    {device}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
          {/* </div> */}
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isLoading || url === ""}>
              {isLoading ? "Generating..." : "Generate Screenshots"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {screenshots.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Generated Screenshots</h2>
          <div className="md:px-20 flex-col flex gap-4">
            {screenshots.map((screenshot, index) => (
              <ScreenshotCard screenshot={screenshot} key={index}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
