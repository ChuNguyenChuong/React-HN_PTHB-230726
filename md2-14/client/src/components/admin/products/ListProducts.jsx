import { useQuery } from "react-query";
import { getProductAPI } from "../../../helper/axious";
import Loading from "../../Loading";

const ListProducts = () => {

  const { data, isLoading } = useQuery('todos', getProductAPI)

  const classThTd = "border border-slate-600 flex items-center justify-center truncate";

  if (isLoading) {
    return <Loading></Loading>
  }
  return <div>{
    <table className="w-full border border-slate-500 border-collapse">
      <thead>
        <tr className="grid grid-cols-3">
          <th className={classThTd}>avt</th>
          <th className={classThTd}>name</th>
          <th className={classThTd}>age</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((item) => {
          return (
            <tr className="grid grid-cols-3" key={item.id}>
              <td className={classThTd}>
                <img src={item.img} alt="" className="w-16" />
              </td>
              <td className={classThTd}>
                <span className="truncate">{item.name}</span>
              </td>
              <td className={classThTd}>{item.price}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  }</div>;
};

export default ListProducts;
