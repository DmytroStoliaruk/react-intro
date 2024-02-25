import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Button from '@mui/material/Button';
import SelectElement from '../../components/SelectElement/SelectElement';
import './CatalogPage.css';


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
      <div class='params'>
        <div class='filters'> 
          <SelectElement
            label="Filter 1"
            items={[ { value: 10, label: 'Products' }, { value: 20, label: 'Services' }, { value: 30, label: 'Material' } ]}
          />  
          <SelectElement
            label="Filter 2"
            items={[ { value: 10, label: 'Price' }, { value: 20, label: 'Count' } ]}
          />  
          <SelectElement
            label="Filter 3"
            items={[ { value: 10, label: 'Owner' }, { value: 20, label: 'Client' }, { value: 30, label: 'Other' } ]}
          />  
        </div>
        <Button variant="contained" style={{ width: '100px', height: '40px', borderRadius: '10px',  margin: '15px' }}>Apply</Button>
      </div>  
      <div class='catalog-content'>  
        <div className="catalog-list">
          {catalogData.map((item, index) => (
            <CatalogCard />
          ))}
        </div>
      </div>  
    </div>
  );
}

export default CatalogPage;