import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <ul className='List' id='dala-list'>
        <li className='Li'><strong>firstName: </strong> {data.firstName}</li>
        <li className='Li'><strong>biography: </strong>
          <ul className='Biography'>
            <li className='Li'> <strong>birthday: </strong>{data.biography.birthday}</li>
            <li className='Li'> <strong>country: </strong>{data.biography.country}</li>
            <li className='Li'> <strong>hobby: </strong>{data.biography.hobby.join(', ')}</li>
          </ul>
        </li>
        <li className='Li'><strong>publicContacts: </strong>
          <ul className='PublicContacts'>
            <li className='Li'> <strong>github: </strong><a href={data.publicContacts.github}>{data.publicContacts.github}</a></li>
            <li className='Li'> <strong>gitlab: </strong><a href={data.publicContacts.gitlab}>{data.publicContacts.gitlab}</a></li>
          </ul>
        </li>
      </ul >
    </div >
  );
}

export default App;
