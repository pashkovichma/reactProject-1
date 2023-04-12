import CloseModal from './CloseModal';
import './Modal.scss';

interface IProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({ children, visible, setVisible }: IProps) => {
  const styleClass = ['modal'];
  if (visible) {
    styleClass.push('active');
  }

  return (
    <div className={styleClass.join(' ')} onClick={() => setVisible(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
        <span className="close" onClick={() => setVisible(false)}>
          <CloseModal />
        </span>
      </div>
    </div>
  );
};
