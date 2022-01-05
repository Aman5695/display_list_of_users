import axios from "axios";
import { useEffect, useState } from "react";
import Single from "./Single/Single";
import "./ListofUser.css";
import CustomPagination from "./Pagination/Pagination";

 

const ListOfUsers = () => {
    const [page, setPage] = useState(1)
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchDetail = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}page=${page}`); //axios is used to fetch the data

    console.log(data);

    setContent(data.data);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchDetail();
   // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="page_title">List of Users</span>
      <div className="content">
        {content && content.map((c) => (
            <Single
              key={c.id}
              id={c.id}
              first_name={c.first_name}
              last_name={c.last_name}
              email={c.email}
              avatar={c.avatar}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default ListOfUsers;
