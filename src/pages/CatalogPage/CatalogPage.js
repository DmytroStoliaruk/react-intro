import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Button from '@mui/material/Button';
import SelectElement from '../../components/SelectElement/SelectElement';

function CatalogPage() {
  const catalogData = [
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
      <SelectElement />
      <div class='catalog-content'>  
        <div className="catalog-list">
          {catalogData.map((item, index) => (
            <CatalogCard />
          ))}
        </div>
      </div>  
      <Button variant="contained" style={{ marginTop: '30px' }}>View more</Button>
    </div>
  );
}

export default CatalogPage;