import { Blob, BlobProps } from "./blob";
import { MotionCompanyLogo, MotionCompanyText } from "./company-logo";

export function CompanyBlob({
  hasText,
  children,
  ...props
}: BlobProps & { hasText?: boolean }) {
  return (
    <Blob layout layoutId="companyBlob" transition={{ duration: 2 }} {...props}>
      <MotionCompanyLogo layout className="h-4" />
      {hasText && (
        <MotionCompanyText
          layout
          className="h-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        />
      )}
      {children}
    </Blob>
  );
}
