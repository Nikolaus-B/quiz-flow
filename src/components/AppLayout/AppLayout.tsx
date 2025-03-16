import { Suspense } from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      {/* <header></header> */}
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer></footer> */}
    </>
  );
};

export default AppLayout;
