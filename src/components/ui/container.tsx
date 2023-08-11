type Props = {
  className?: string;
};

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={`${className} 2xl:w-[1280px] w-11/12 mx-auto`}>
      {children}
    </div>
  );
};
