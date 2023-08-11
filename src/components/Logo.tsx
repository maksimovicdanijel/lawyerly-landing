type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({ className = "" }) => (
  <span className={`inline-flex ${className}`}>
    <span className="font-[Lexend] text-2xl text-blue-950">
      <span className="inline-block mr-[10px] relative text-white">
        <span className="absolute top-0 left-[-7px] h-8 w-7 bg-blue-700 rounded shadow-sm z-0" />
        <span className="relative z-1">L</span>
      </span>
      awyerly
    </span>
  </span>
);
