import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const ListUser = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUser() {
      const res = await axios.get("http://localhost:3000/users");
      const data = res.data;
      setUserList(data);
    }
    getUser();
  }, []);


  const classThTd = "border border-slate-600 flex items-center justify-center truncate";

  return (
    <div>
      {userList.length === 0 && "khong co du lieu"}
      {userList.length !== 0 && (
        <table className="w-full border border-slate-500 border-collapse">
          <thead>
            <tr className="grid grid-cols-5">
              <th className={classThTd}>avt</th>
              <th className={classThTd}>name</th>
              <th className={classThTd}>age</th>
              <th className={classThTd}>email</th>
              <th className={classThTd}>status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => {
              return (
                <tr className="grid grid-cols-5" key={item.id}>
                  <td className={classThTd}>
                    <img src={item.avt} alt="" className="w-16" />
                  </td>
                  <td className={classThTd}>
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className={classThTd}>{item.age}</td>
                  <td className={classThTd}>
                    <span className="truncate">{item.email}</span>
                  </td>
                  <td className={classThTd}>{item.isActive ? <span>active</span> : <span>de-active</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListUser;
