import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleServiceRequest } from "../actions/actionCreators";

const ServiceByID = () => {
  const { item, loading, error } = useSelector((state) => state.serviceByID);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleServiceRequest(id));
  }, [dispatch]);

  const handleOnClick = () => {
    dispatch(fetchSingleServiceRequest(id));
  };

  return (
    <>
      <div className="wrapper">
        {loading && <div className="lds-dual-ring"></div>}
        {item && (
          <div>
            {item.name} {item.content} {item.price}
          </div>
        )}
        {error && (
          <div>
            Произошла ошибка!{" "}
            {<button onClick={handleOnClick}>Повторить запрос</button>}
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceByID;
