type ProjectStatusProps = {
  status?: "concluded" | "development";
};

export default function Status({
  status = "development",
}: ProjectStatusProps) {
  const isConcluded = status === "concluded";

  return (
    <div
      className={`animation-blur flex items-center gap-2 px-2 py-1 rounded-lg ${
        isConcluded ? "bg-green-400/20" : "bg-amber-400/20"
      }`}
    >
      <span className="relative flex size-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            isConcluded ? "bg-green-500" : "bg-amber-500"
          }`}
        ></span>
        <span
          className={`relative inline-flex size-2 rounded-full ${
            isConcluded ? "bg-green-500" : "bg-amber-500"
          }`}
        ></span>
      </span>
      <p
        className={`text-xs ${
          isConcluded ? "text-green-500" : "text-amber-500"
        }`}
      >
        {isConcluded ? "Concluído" : "Em desenvolvimento"}
      </p>
    </div>
  );
}
