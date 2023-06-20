import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter-slice';
import { StyledInput, StyledLabel } from './StyledFilter';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter contact name"
      />
    </>
  );
};

export default Filter;
