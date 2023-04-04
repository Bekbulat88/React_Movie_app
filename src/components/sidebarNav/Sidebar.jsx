import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/modalLogin/modalLoginSlice';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(logIn());
  };
  // const logOut = () => {
  //   if ()
  //   setLogIn(false)
  // }

  return (
    <nav className={style.root}>
      <ul>
        <li>
          <Link to={'/'}>
            <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
            </svg>
            Home
          </Link>
        </li>

        <li>
          <Link to={'/watch_list'}>
            <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M15 33.7q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm0-8.2q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm0-8.2q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm6.6 16.4h12.2v-3H21.6Zm0-8.2h12.2v-3H21.6Zm0-8.2h12.2v-3H21.6ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z" />
            </svg>
            Watch List
          </Link>
        </li>
        <li>
          <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
          </svg>
          <Link href="!#">help</Link>
        </li>
        <li>
          <Link onClick={logOutHandler}>
            <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" />
            </svg>
            logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
