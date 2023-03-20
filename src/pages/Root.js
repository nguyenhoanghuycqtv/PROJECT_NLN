import { Outlet } from "react-router-dom";
import Header from "../shared/components/templates/Header";
import Menu from "../shared/components/templates/Menu";
import UserTableList from "../shared/components/User/UserTableList";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full">
        <Header />
      </div>

      <div className="flex-1 flex flex-col md:flex-row mt-20">
        <div className="md:w-1/4 bg-gray-100">
          <div className="w-12/12">
            <Menu />
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-4">
          <div className="w-12/12">
            <Outlet />
          </div>
        </div>

        <div className="md:w-1/4 bg-gray-100">
          <div className="w-12/12">
            <UserTableList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
