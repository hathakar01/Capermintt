import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./Data.json";

export const ProductDetails = () => {
  const { id } = useParams();
  //const [productData, setProductData] = useState();

    // useEffect(() => {

    //     const selectedProduct = Data?.filter((item) => item.id == id);
    //     setProductData(selectedProduct);
    //     const id1 = Number(id)
    //     console.log(id1, "id");
    //     console.log(selectedProduct, "selecteProduct");
    //     console.log(selectedProduct[0].des);
    //   }, [id]);

  const selectedProduct = Data?.filter((item) => item.id == id);
  const id1 = Number(id)
  console.log(id1, "id");
// //  console.log(Data , 'data')
console.log(selectedProduct[0].title);
  return (
    <Container maxWidth="lg">
    
      {selectedProduct? (
        <div>
          <Typography
            variant="h3"
            align="center"
            style={{ marginBottom: "20px" }}
          >
            Product Details
          </Typography>
          <img
            src={selectedProduct[0].img}
            alt=""
            style={{ width: "80%", height:"60vh" , borderRadius: "20px" }}
          />
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            {selectedProduct[0].title}
          </Typography>
          <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
            {selectedProduct[0].des}
          </Typography>
          <Typography variant="h5" style={{ marginTop: "10px" }}>
            Price: ₹{selectedProduct[0].price}
          </Typography>
        </div>
      ) : (
        <Typography variant="h5" align="center" style={{ marginTop: "50px" }}>
          Product not found.
        </Typography>
      )}
    </Container>
  );
};

// import { Container, Grid, Typography } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Data from "./Data.json";
// export const ProductDetails = () => {
// //const { id } = useParams();
//  const [data, setData] = useState([]);

//   return (
//     <>

//      <div>
//       <h1>JSON Data</h1>
//       <ul>
//         {Data.map((item,index) => (

//           <li key={index}>{item.id} -
//           {item.title}</li>
//         ))}
//       </ul>
//     </div>

//     </>
//   );
// };
