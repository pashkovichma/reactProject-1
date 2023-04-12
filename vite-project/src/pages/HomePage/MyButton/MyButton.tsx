interface IProps {
  children: string;
  [key: string]: unknown;
}

export const MyButton = ({ children, ...props }: IProps) => {
  return <button {...props}>{children}</button>;
};
