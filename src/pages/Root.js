import { Outlet } from "react-router-dom";
import MainHeader from "../shared/components/templates/MainHeader";
import UserTableList from "../shared/components/User/UserTableList";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <MainHeader />
      </header>
      <main className="flex-1 flex">
        <div className="h-full w-3/4 flex justify-center items-center">
          <Outlet />
        </div>
        <aside className="h-full w-1/4">
          <UserTableList />
        </aside>
      </main>
    </div>
  );
};

export default Root;
