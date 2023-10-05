export default function TodoList() {
    // Extraer la URL de la imagen del objeto person
    const imageUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
  
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={imageUrl} // Usar la variable imageUrl aquí
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  