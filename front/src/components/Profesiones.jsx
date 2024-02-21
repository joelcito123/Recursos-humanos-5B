const Profesiones = () => {
    const profesiones = [
      { id: 1, titulo: 'Abogado' },
      { id: 2, titulo: 'Arquitecto' },
      { id: 3, titulo: 'Botánico' },
      { id: 4, titulo: 'Computista' },
      { id: 5, titulo: 'Economista' },
      { id: 6, titulo: 'Técnico de sonido' },
      { id: 7, titulo: 'Profesor' },
      { id: 8, titulo: 'Linguista' },
    ];
  
    return (
      <section className="content profesiones">
        <h2 className="mt-3">Profesiones</h2>
        <div className="list-group shadow-sm p-3 mb-5 rounded">
          <h4 className="list-group-item list-group-item-action active text-center"
            aria-current="true">
            Listado de Profesiones
          </h4>
          {profesiones.map(profesion => (
            <button key={profesion.id} type="button" className="list-group-item list-group-item-action text-center">
              {profesion.titulo}
            </button>
          ))}
        </div>
      </section>
    );
  };
  
  export default Profesiones;
  