import { Outlet } from 'react-router';
import Header from '../Header/Header';

export default function CommonLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
