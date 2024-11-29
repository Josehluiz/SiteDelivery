import { useState, useEffect } from 'react';
import axios from 'axios';

function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/users/1')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar o usuário', error);
      });
  }, []);

  if (!user) return <div>Carregando...</div>;

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-yellow-500 p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Informações do Usuário</h1>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-3xl font-bold mb-4">Olá, {user.name}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefone:</strong> {user.phone}</p>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Delivery App</p>
      </footer>
    </div>
  );
}

export default UserPage;
