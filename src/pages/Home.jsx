
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import RestCard from '../component/RestCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from '../redux/restaurantSlice';
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const { allRestaurant, loading, error } = useSelector((state) => state.restaurantSlice);
  // console.log(`res ${ allRestaurant }`);
  console.log('res', allRestaurant);

 



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, [dispatch]);

  return (
    <Row>
      {/* <div className='mt-3'>
        {loading && <p><Spinner animation="border" className=' text-warning '/>Loading</p>}
      </div> */}

      {allRestaurant?.restaurants.length > 0 ?
        allRestaurant?.restaurants.map((restaurant) => (
          <Col className='px-5 py-3' sm={6} md={4} key={restaurant.id}>
            <RestCard restaurant={restaurant} />
          </Col>
        ))
        :
        <p className='text-danger fw-bolder '> No Restaurant Available</p>
      }
    </Row>
  );
}

export default Home;
