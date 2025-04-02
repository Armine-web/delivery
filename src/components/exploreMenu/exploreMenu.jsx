import { menuLists } from '../../assets/assets';
import './exploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='explore-menu-heding'>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes, from savory appetizers to mouthwatering main courses. Each dish is crafted with the finest ingredients, offering a unique blend of flavors that will satisfy every palate.</p>
      <div className="explore-menu-list">
        {menuLists.map((item, index) => (
          <div className='explore-menu-list-item' onClick={() => setCategory(prev=>prev===item.mealType?"All":item.mealType)}  key={index}>
            <img className={category===item.mealType?'active': ''} src={item.image} alt={item.mealType} style={{ width: '150px', height: '150px', objectFit:'cover', borderRadius: '50%', cursor: 'pointer', transition: '0.2s', marginBottom: '10px'}} />
            <p style={{color: '#747474', fontSize: 'max(1vw, 16px)', cursor: 'pointer'}}>{item.mealType}</p>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;

