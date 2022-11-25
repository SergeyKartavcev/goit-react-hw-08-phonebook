import { InputFilter, LabelFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from '../../redux/actions';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
console.log(filter)

  

  return (
    <LabelFilter>
      <InputFilter
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        id="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </LabelFilter>
  );
};

export default Filter;
