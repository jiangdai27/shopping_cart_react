import { Card, Divider } from "antd";

const ProductCard = (props) => {
  return (
    <Card
      hoverable
      style={{ padding: 10 }}
      cover={
        <img height="320px" width="280px" alt="example" src={props.itemImage} />
      }
    >
      <Card.Meta
        title={<h2>{props.itemName}</h2>}
        description={props.itemDescription}
      />
      <div
        style={{
          lineHeight: "28px",
          fontWeight: "lighter",
          fontSize: "46px",
          color: "#2ecc71",
          textAlign: "center",
        }}
      >
        
        <Divider orientation="center">Price</Divider>
        {props.itemPrice}
        </div>
      
    </Card>
  );
};
export default ProductCard;
