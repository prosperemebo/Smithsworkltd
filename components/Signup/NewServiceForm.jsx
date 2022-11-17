import { useRef, useState } from 'react';

const NewServiceForm = ({ onSubmit }) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [newService, setNewService] = useState('');
  const inputRef = useRef(newService);

  const newServiceHandler = (e) => {
    setNewService(e.target.value);

    if (e.target.value.trim().length > 0) {
      inputRef.current = e.target.value;
      return setCanSubmit(true);
    }

    setCanSubmit(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (canSubmit) {
      onSubmit(inputRef.current);
      setCanSubmit(false);
      setNewService('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={newService}
        placeholder='Enter Service'
        onChange={newServiceHandler}
      />

      {canSubmit && (
        <button>
          <img src='/assets/check.svg' alt='Add' />
        </button>
      )}
    </form>
  );
};

export default NewServiceForm;
