import { Card } from 'antd';

const { Meta } = Card;
const CustomDog = ({item}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={item.image.url} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <p>{item.name}</p>
  </Card>
  
);
export default CustomDog;