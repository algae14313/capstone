import SettingsP from '../PageSettings/Settings';
import Navbar from '../Navbar/Navbar';

function Settings() {

  return (
    <main className="App">
        <Navbar/>
      <SettingsP />
      <button className='btn'> <a href = 'login' style={{color: '#f9e7dc' }}> LogOut </a></button>
    </main>
  );
}

export default Settings ;