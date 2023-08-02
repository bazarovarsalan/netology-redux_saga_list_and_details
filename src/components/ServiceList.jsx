import { useEffect } from "react";
import "../../src/App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceRequest } from "../actions/actionCreators";
import { useNavigate } from "react-router";

const ServicesList = () => {
  const { items, loading, error } = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchServiceRequest());
  }, [dispatch]);

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          items &&
          items.map((o) => (
            <div
              className="item"
              key={o.id}
              onClick={() => {
                dispatch(fetchServiceRequest());
                navigate(`/${o.id}/details`);
              }}
            >
              {o.name + "  "}
              {o.price}
            </div>
          ))
        )}
        {error && !items && (
          <div>
            Произошла ошибка!{" "}
            {
              <button
                onClick={() => {
                  dispatch(fetchServiceRequest());
                }}
              >
                Повторить запрос
              </button>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesList;
