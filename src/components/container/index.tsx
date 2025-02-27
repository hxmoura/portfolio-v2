type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full py-12 sm:pt-20 sm:pb-12 mx-4 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
