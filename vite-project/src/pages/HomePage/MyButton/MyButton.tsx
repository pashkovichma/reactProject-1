import './MyButton.css';

interface IProps {
  children: string;
  [key: string]: unknown;
}

export const MyButton = ({ children, ...props }: IProps) => {
  return (
    <button className="show__button" {...props}>
      {children}
    </button>
  );
};
