import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_AMENITIES,
  UPDATE_CURRENT_AMENITY,
} from '../../utils/actions';
import { QUERY_AMENITIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function Merchandise() {
  const [state, dispatch] = useStoreContext();

  const { amenities } = state;

  const { loading, data: amenityData } = useQuery(QUERY_AMENITIES);

  useEffect(() => {
    if (amenityData) {
      dispatch({
        type: UPDATE_AMENITIES,
        amenities: amenityData.amenities,
      });
      amenityData.amenities.forEach((amenity) => {
        idbPromise('amenities', 'put', amenity);
      });
    } else if (!loading) {
      idbPromise('amenities', 'get').then((amenities) => {
        dispatch({
          type: UPDATE_AMENITIES,
          amenities: amenities,
        });
      });
    }
  }, [amenityData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_AMENITY,
      currentAmenity: id,
    });
  };

  return (
    <div>
      <h2>Choose a Amenity:</h2>
      {amenities.map((item) => (
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

export default Merchandise;