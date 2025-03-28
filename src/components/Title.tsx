type SectionTitleProps = {
  children: React.ReactNode;
  center?: boolean;
  noMargin?: boolean;
};

export default function Title({
  children,
  center,
  noMargin,
}: SectionTitleProps) {
  return (
    <h4
      className={`font-semibold text-lg animation-blur
        ${center && "text-center"} ${!noMargin && "mb-7"}
      `}
    >
      {children}
    </h4>
  );
}
