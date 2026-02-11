import CircularCropTool from "./circular-crop-tool";

export default function CircularCropPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight sm:text-3xl">
            Circular Crop
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload an image, adjust the circle, and download your crop.
          </p>
        </div>

        <CircularCropTool />

        <section className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free Online Circular Image Cropper
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NewTools&apos;s circular crop tool lets you upload any image and
              crop it into a perfect circle. Drag to position, pinch or use the
              slider to zoom, and download a transparent PNG — all processed
              in your browser. No uploads to any server, no ads, no sign-up.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              How It Works
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Upload</strong> — tap or
                drag &amp; drop any PNG, JPG, or WEBP image
              </li>
              <li>
                <strong className="text-foreground">Position</strong> — drag
                the image to center the area you want
              </li>
              <li>
                <strong className="text-foreground">Zoom</strong> — pinch on
                mobile or use the slider to zoom in and out
              </li>
              <li>
                <strong className="text-foreground">Crop</strong> — hit the
                crop button to generate your circular image
              </li>
              <li>
                <strong className="text-foreground">Download</strong> —
                save as a transparent PNG, ready to use anywhere
              </li>
              <li>
                <strong className="text-foreground">Re-crop</strong> — go
                back and adjust without re-uploading
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="text-sm font-medium">
                  Is my image uploaded to a server?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No. Everything happens in your browser. Your image never
                  leaves your device — it is processed entirely client-side
                  using the HTML Canvas API.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  What format is the output?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The cropped image is saved as a PNG with a transparent
                  background, so the area outside the circle is fully
                  transparent.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Does this work on mobile?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. The cropper supports touch gestures — drag to move and
                  pinch to zoom. It works on any phone, tablet, or desktop.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is this circular crop tool free?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completely free. No ads, no sign-up, no limits. Use it as
                  often as you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}