type ExperienceProps = {
  title: string;
  description: string;
  date: string;
  onClick?: (e: unknown) => void;
};

export default function Experience({
  title,
  description,
  date,
  onClick,
}: ExperienceProps) {
  return (
    <article
      className={`flex flex-col sm:flex-row gap-1 sm:gap-5 animation-blur ${
        onClick && "cursor-pointer"
      }`}
      onClick={onClick}
    >
      <p className="min-w-fit text-brand-500 dark:text-brand-300">{date}</p>
      <div className="space-y-3">
        <h5 className="font-semibold whitespace-break-spaces">{title}</h5>
        <p className="text-brand-500 dark:text-brand-300 whitespace-break-spaces">
          {description}
        </p>
      </div>
    </article>
  );
}
