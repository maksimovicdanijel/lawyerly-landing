type Props = {
  price: number;
  title: string;
  description?: string;
  action: React.ReactNode;
  features: string[];
  highlighted?: boolean;
};

export const PricingTable: React.FC<Props> = ({
  price,
  title,
  description,
  action,
  features,
  highlighted = false,
}) => {
  return (
    <div
      className={`p-7 bg-white rounded-xl shadow ${
        highlighted ? "bg-customPrimary " : ""
      }`}
    >
      <p
        className={`text-5xl font-[Lexend] mb-6 ${
          highlighted ? "text-white" : "text-blue-950"
        }`}
      >
        {price}€
      </p>
      <h6
        className={`font-[Lexend] text-[18px] mb-3 ${
          highlighted ? "text-white" : "text-blue-950"
        }`}
      >
        {title}
      </h6>
      <p className={`${highlighted ? "text-white" : "text-slate-700"} mb-8`}>
        {description}
      </p>

      <ul className="mb-12">
        {features.map((feature) => (
          <li
            className={`mb-4 flex ${
              highlighted ? "text-white" : "text-slate-700"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {feature}
          </li>
        ))}
      </ul>

      <div>{action}</div>
    </div>
  );
};
