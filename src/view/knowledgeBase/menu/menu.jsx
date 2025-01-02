import "./menu.scss";

const list = [
  {
    id: "0001",
    icon: "",
    title: "组件",
    subtitle: [
      {
        id: "1001",
        title: "1",
        icon: "",
      },
      {
        id: "1002",
        title: "2",
        icon: "",
      },
    ],
  },
  {
    id: "0002",
    icon: "",
    title: "组件2",
    subtitle: [
      {
        id: "2001",
        title: "1",
        icon: "",
      },
      {
        id: "2002",
        title: "2",
        icon: "",
      },
      {
        id: "2003",
        title: "3",
        icon: "",
      },
    ],
  },
];

const NavMenu = () => {
  return (
    <>
      {list.map((item) => {
        return (
          <div className="nav-panel" key={item.id}>
            <div className="nav-title">
              <i></i>
              <span>{item.title}</span>
            </div>
            {item.subtitle.map((el) => {
              return (
                <div className="nav-header">
                  <i></i>
                  <span>{el.title}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default NavMenu;
