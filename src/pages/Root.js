import { Outlet } from "react-router-dom";
import Header from "../shared/components/templates/Header";
import Menu from "../shared/components/templates/Menu";
import FriendList from "../shared/components/Friend/FriendList";
import { useSelector } from "react-redux";

const Root = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const friends = useSelector((state) => state.users.friends);
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="grid grid-cols-10 gap-4 p-4 mt-16">
        <div className="col-span-2 bg-white">
          <Menu />
        </div>
        <div className="col-span-5 bg-white">
          <Outlet />
        </div>
        <div className="col-span-3 bg-white">
          {isLoggedIn && <FriendList friends={friends} />}
        </div>
      </div>
    </div>
  );
};

export default Root;
