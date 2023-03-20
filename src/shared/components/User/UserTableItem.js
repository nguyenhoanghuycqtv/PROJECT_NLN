import Avatar from "../UI/Avatar";

const UserTableItem = (props) => {
  return (
    <div className="card w-12/12 glass mt-4">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Avatar image={props.image} />
          </div>
        </div>
        <div>
          <div className="font-bold">{props.name}</div>
          <div className="text-sm">{props.email}</div>
        </div>
      </div>
    </div>
  );
};

export default UserTableItem;
