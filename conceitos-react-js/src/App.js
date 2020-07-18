import React, { useState } from 'react';
import Header from './components/Header'

function App() {

    const { projects, serProjects } = useState(['Desenvolvimento de App', 'Web']);


    function handleAddProject() {
        serProjects([ ...projects,`Novo Projeto ${Date.now()}` ]);
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

        </>

    );
}
export default App;