// src/App.tsx
import './App.css';
import { Card } from './components/Card';
import { students } from './students';
function App() {
  const myInfo = students[0];

  const otherStudents = students.slice(1);

  const sortedStudents = otherStudents.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <header>
        <h1>Projeto React Cards</h1>
        <p>Participantes do Grupo Protect +</p>
      </header>

      <main className="card-list">
        <Card 
          key={myInfo.name} 
          name={myInfo.name} 
          time={myInfo.time} 
          github={myInfo.github}
          photo={myInfo.photo}
        />

        {sortedStudents.map(student => (
          <Card 
            key={student.name} 
            name={student.name} 
            time={student.time} 
            github={student.github}
            photo={student.photo}
          />
        ))}
      </main>
    </div>
  )
}

export default App;