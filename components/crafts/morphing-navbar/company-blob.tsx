import { Blob, BlobProps } from "./blob";
import { MotionCompanyLogo, MotionCompanyText } from "./company-logo";

export function CompanyBlob({
  hasText,
  multiplier,
  children,
  ...props
}: BlobProps & { hasText?: boolean; multiplier: number }) {
  return (
    <Blob key="companyBlob" layout layoutId="companyBlob" {...props}>
      <MotionCompanyLogo key="companyLogo" layout className="h-4" />
      {hasText && (
        <MotionCompanyText
          key="companyText"
          layout
          className="h-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 / multiplier, duration: 0.4 / multiplier }}
        />
      )}
      {children}
    </Blob>
  );
}
