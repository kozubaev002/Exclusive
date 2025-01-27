import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/baykot/baykot'

function BaykotKg() {
  const dispatch = useDispatch();
  const { loading, baykot, error } = useSelector((state) => state.v1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log( baykot);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      BaykotKg
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {
      baykot.map((item) => (
        <div  key={item.id}>
          <img style={{height:"300px", width:"300px", objectFit:"contain", borderRadius:"8px", boxShadow:"0 4px 8px rgb(0,0,0,0.2)"}} src={item.logo} alt="" />
        </div>
      ))
    }
      </div>
   
    </div>
  );
}

export default BaykotKg;

