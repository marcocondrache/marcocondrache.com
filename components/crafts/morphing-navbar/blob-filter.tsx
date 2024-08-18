import { VisuallyHidden } from "@/components/visually-hidden";

export function BlobFilter(props: React.ComponentProps<"svg">) {
  return (
    <VisuallyHidden>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" {...props}>
        <filter
          id="blobFilter"
          x="-50%"
          width="200%"
          y="-50%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacement"
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="blobFilter"
          />
          <feComposite in="SourceGraphic" in2="blobFilter" />
        </filter>
      </svg>
    </VisuallyHidden>
  );
}
