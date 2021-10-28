import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_SERVICES,
  UPDATE_CURRENT_SERVICE,
} from '../../utils/actions';
import { QUERY_SERVICES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function Service() {
  const [state, dispatch] = useStoreContext();

  const { services } = state;

  const { loading, data: serviceData } = useQuery(QUERY_SERVICES);

  useEffect(() => {
    if (serviceData) {
      dispatch({
        type: UPDATE_SERVICES,
        services: serviceData.services,
      });
      serviceData.services.forEach((service) => {
        idbPromise('services', 'put', service);
      });
    } else if (!loading) {
      idbPromise('services', 'get').then((services) => {
        dispatch({
          type: UPDATE_SERVICES,
          services: services,
        });
      });
    }
  }, [serviceData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_SERVICE,
      currentService: id,
    });
  };

  return (
    <div>
      <h2>Choose a Service:</h2>
      {services.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Service;