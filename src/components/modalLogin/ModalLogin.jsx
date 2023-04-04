import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, logIn } from '../../redux/modalLogin/modalLoginSlice';
import style from './ModalLogin.module.scss';

const ModalLogin = () => {
  const dispatch = useDispatch();
  const { isOpen, isUserLogIn } = useSelector((state) => state.modalLogin);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('login', JSON.stringify(data));
    dispatch(logIn());
  };

  // useEffect(() => {
  //   dispatch(logIn());
  // }, [isUserLogIn]);
  return (
    isOpen && (
      <div
        className={style.formWrapper}
        onClick={(event) => {
          if (event.target === event.currentTarget) dispatch(closeModal());
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            {...register('email', {
              required: true,
              maxLength: 40,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            })}
          />
          {errors?.email?.type === 'required' && <p>This field is required</p>}
          {errors?.email?.type === 'maxLength' && <p>Email cannot exceed 40 characters</p>}
          {errors?.email?.type === 'pattern' && <p>It's not email</p>}

          <label>Password</label>
          <input
            type={'password'}
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors?.password?.type === 'required' && <p>This field is required</p>}
          {errors?.password?.type === 'minLength' && <p>Password min length is 6</p>}

          <input type="submit" />
        </form>
      </div>
    )
  );
};

export default ModalLogin;
