import ItemCard from '../../components/ItemCard/ItemCard';
import ItemMain from '../../components/ItemMain/ItemMain';
import Button from '@mui/material/Button';

function CartPage() {
  const itemsData = [
    {
      imageUrl: 'https://travels.in.ua/api/Photo/PhotoStreamCIL/845',
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo.'
    },
    {
      imageUrl: 'https://sho.org.ua/wp-content/uploads/2023/04/harkiv.webp',
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo.'
    },
    {
      imageUrl: 'https://travels.in.ua/api/Photo/PhotoStreamCIL/844',
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo.'
    }
  ];

  return (
    <div>
      <div class='item-main'>
        <ItemMain
          imageUrl={'https://gordonua.com/img/article/16701/10_main-v1687567745.jpg'}
          title={'CartPage'}
          text={itemsData[0].text + itemsData[0].text }
        />
      </div>
      <div class='items-content'>  
        <div className="items-list">
          {itemsData.map((item, index) => (
            <ItemCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>  
      <Button variant="contained" style={{ marginTop: '30px' }}>View more</Button>
    </div>
  );
}

export default CartPage;