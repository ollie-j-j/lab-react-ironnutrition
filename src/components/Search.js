import { Divider, Input } from 'antd';

function Search(props) {
  const handleInputChange = (e) => {
    props.setSearchTerm(e.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.searchTerm} type="text" onChange={handleInputChange} />
    </>
  );
}

export default Search;