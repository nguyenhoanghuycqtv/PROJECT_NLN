const Avatar = (props) => {
  return (
    <div className="avatar">
      <div className={`rounded-full ${props.className}`}>
        {<img src={props.image} />}
        {/* <img src={`http://localhost:5000/${props.image}`} /> */}
      </div>
    </div>
  );
};

export default Avatar;
