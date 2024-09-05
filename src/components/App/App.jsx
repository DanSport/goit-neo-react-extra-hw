import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import CommonLayout from '../CommonLayout/CommonLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserError, selectIsLoggedIn, selectIsRefreshing, selectToken } from '../../redux/selectors';
import { refreshUser } from '../../redux/auth/authOperations';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userError = useSelector(selectUserError);

  console.log({ token, isRefreshing, isLoggedIn, userError });

  useEffect(() => {
    if (token && !isRefreshing && !isLoggedIn & !userError) dispatch(refreshUser());
  }, [dispatch, token, isRefreshing, isLoggedIn, userError]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<AuthPage doRegister={false} />} />
          <Route path="/register" element={<AuthPage doRegister={true} />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
