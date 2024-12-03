import  './Square.css'
import cross from './../../assets/Cross.svg';
import zero from './../../assets/Circle.svg';

const Square = ({ value, setValueSquare }) => {
    return (
        <div className={'neon_blue'}>
            <button className={'square'} onClick={() => setValueSquare()}>
                {value && value === 'x' && <img src={cross} alt="Крестик" />}
                {value && value === 'o' && <img src={zero} alt="Нолик" />}
            </button>
        </div>
    );
};

export default Square;