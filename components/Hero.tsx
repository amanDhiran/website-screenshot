"use client";
import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import {useDispatch} from "react-redux"
import { setScreenshots } from "@/store/screenshotSlice";
import Image from "next/image";

export type Device = "desktop" | "tablet" | "mobile";

export interface Screenshot {
  device: Device;
  url: string;
}
export function Hero() {
  const [url, setUrl] = useState<string>("");
  const [devices, setDevices] = useState<Device[]>(["desktop"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDelayMessage, setShowDelayMessage] = useState<boolean>(false);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post<{ screenshots: Screenshot[] }>(
        `${BACKEND_URL}`,
        { url, devices }
      );
      dispatch(setScreenshots(response.data.screenshots));
      router.push("/screenshots")
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

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      timer = setTimeout(() => setShowDelayMessage(true), 2000); // 3-second delay
    }

    // Clean up the timer when loading stops or component unmounts
    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleDeviceToggle = (device: Device) => {
    setDevices((prev) =>
      prev.includes(device)
        ? prev.filter((d) => d !== device)
        : [...prev, device]
    );
  };
  return (
    <div className="max-w-lg mx-auto">
      <Image src="/Frame.svg" alt="" height={50} width={160} className="ml-auto " />
      <Card className="mb-20 mt-4 overflow-hidden  pt-0">

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
          <CardFooter className="flex flex-col gap-1 items-start">
            <Button className="w-full" type="submit" disabled={isLoading || url === ""}>
              {isLoading ? "Generating..." : "Generate Screenshots"}
            </Button>
            {showDelayMessage && <p className="text-xs font-medium text-red-500">*This might take a while, please wait</p>}
          </CardFooter>
        </form>
      </Card>
      
    </div>
  );
}
