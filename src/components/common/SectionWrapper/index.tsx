const SectionWrapper = ({
  children,
  title,
  brief,
}: {
  children: React.ReactNode;
  title: string;
  brief: string;
}) => {
  return (
    <div className="mt-8">
      <h2 className=" md:text-2xl text-xl font-bold">{title}</h2>
      <span className="md:text-sm text-[12px] text-gray-500">{brief}</span>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default SectionWrapper;
