import { Card } from 'antd';

const { Meta } = Card;
const CustomDogSingle = ({item}) => (
  <Card
    hoverable
    style={{
      width: 500,
      top: 0,
      position: 'sticky',
    }}
    cover={<img alt="example" src={item.image.url} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <p>{item.name}</p>
    <p>{item.weight.metric}</p>
    <p>{item.height.metric}</p>
    <p>{item.life_span}</p>

  </Card>
  
);
export default CustomDogSingle;