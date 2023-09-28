import React, { ReactNode } from "react";
interface QuoteSectionProps {
  text: ReactNode;
}
const QuoteSection = ({ text }: QuoteSectionProps) => {
  return (
    <section className="flex h-[450px] flex-col items-center justify-center gap-[33px] bg-primary md:h-[640px]">
      {text}
    </section>
  );
};

export default QuoteSection;
