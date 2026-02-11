"use client";

import { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Download,
  Trash2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

async function getCroppedCircularImage(
  imageSrc: string,
  pixelCrop: Area,
  outputSize: number = 0
): Promise<Blob> {
  const image = new Image();
  image.crossOrigin = "anonymous";
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = reject;
    image.src = imageSrc;
  });

  const size = outputSize || Math.min(pixelCrop.width, pixelCrop.height);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Draw circular clip
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  // Draw the cropped portion of the image
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    size,
    size
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to create blob"));
      },
      "image/png",
      1
    );
  });
}

export default function CircularCropTool() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setPreview(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    };
    reader.readAsDataURL(file);
  }, []);

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCrop = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;
    setIsProcessing(true);
    try {
      const blob = await getCroppedCircularImage(imageSrc, croppedAreaPixels);
      const url = URL.createObjectURL(blob);
      setPreview(url);
    } catch (err) {
      console.error("Crop failed:", err);
    } finally {
      setIsProcessing(false);
    }
  }, [imageSrc, croppedAreaPixels]);

  const handleDownload = useCallback(() => {
    if (!preview) return;
    const a = document.createElement("a");
    a.href = preview;
    a.download = "circular-crop.png";
    a.click();
  }, [preview]);

  const handleReset = useCallback(() => {
    setImageSrc(null);
    setPreview(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setPreview(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <section className="min-h-screen">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />

      {/* Upload area / Cropper */}
      {!imageSrc ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex h-[400px] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 transition-colors hover:border-muted-foreground/50 hover:bg-muted/50 sm:h-[450px]"
        >
          <Upload className="h-10 w-10 text-muted-foreground/50" />
          <div className="text-center">
            <p className="text-sm font-medium">
              Tap to upload or drag &amp; drop
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              PNG, JPG, WEBP — any size
            </p>
          </div>
        </div>
      ) : !preview ? (
        <>
          {/* Cropper */}
          <div className="relative h-[400px] overflow-hidden rounded-xl border sm:h-[450px]">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          {/* Zoom controls */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setZoom((z) => Math.max(1, z - 0.1))}
              disabled={zoom <= 1}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="h-1.5 w-40 cursor-pointer appearance-none rounded-full bg-muted accent-primary sm:w-56"
            />
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setZoom((z) => Math.min(3, z + 0.1))}
              disabled={zoom >= 3}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex w-full gap-1">
            <Button
              variant="outline"
              onClick={() => {
                fileInputRef.current?.click();
              }}
              className="w-1/3"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Change
            </Button>
            <Button
              onClick={handleCrop}
              disabled={isProcessing}
              className="w-1/3"
            >
              {isProcessing ? "Cropping..." : "Crop"}
            </Button>
            <Button
              variant="destructive"
              onClick={handleReset}
              className="w-1/3"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Clear
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* Preview */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center rounded-xl border bg-[repeating-conic-gradient(#e5e7eb_0%_25%,transparent_0%_50%)] dark:bg-[repeating-conic-gradient(#27272a_0%_25%,transparent_0%_50%)] bg-[length:16px_16px] p-8 sm:p-12">
              <img
                src={preview}
                alt="Cropped circular image"
                className="h-48 w-48 rounded-full sm:h-64 sm:w-64"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex w-full gap-1">
            <Button
              variant="outline"
              onClick={() => {
                setPreview(null);
              }}
              className="w-1/3"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Re-crop
            </Button>
            <Button onClick={handleDownload} className="w-1/3">
              <Download className="h-3.5 w-3.5" />
              Download PNG
            </Button>
            <Button variant="destructive" onClick={handleReset} className="w-1/3">
              <Trash2 className="h-3.5 w-3.5" />
              Clear
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
