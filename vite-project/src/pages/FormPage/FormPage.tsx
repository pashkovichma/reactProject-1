import { useState } from 'react';
import { IFormCard } from '../../types/interfaces';
import Form from './form/form';
import FormCard from './formCard/formCard';

function FormPage() {
  const [items, setItems] = useState<IFormCard[]>([]);

  const onChangeItem = (newItem: IFormCard) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Fill the form</h2>
      <Form addFormCard={onChangeItem} />
      <div className="form-cards">
        {items.map((card: IFormCard, index) => {
          return <FormCard form={card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default FormPage;
