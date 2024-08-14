export function BlobFilter(props: React.ComponentProps<"svg">) {
  return (
    <svg
      className="hidden"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      {...props}
    >
      <filter
        id="blobFilter"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        colorInterpolationFilters="sRGB"
      >
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
  );
}
