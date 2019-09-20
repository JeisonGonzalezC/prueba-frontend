import React from 'react';

const FormTask = (props) => {
    const { dataFormTask, getDataState, task } = props
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Agregar Tarea</h2>
                        <form onSubmit={dataFormTask}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" name="name" onChange={getDataState} value={task.name} />
                            </div>
                            <div className="form-group">
                                <label>Prioridad</label>
                                <input type="number" className="form-control" placeholder="Prioridad" name="priority" onChange={getDataState} value={task.priority} />
                            </div>
                            <div className="form-group">
                                <label>Descripción</label>
                                <textarea onChange={getDataState} value={task.description} name="description" className="form-control" rows="5" placeholder="Descripción" />
                            </div>

                            <div className="form-group">
                                <label>Tipo de tarea</label>
                                <select onChange={getDataState} value={task.typeTask} name="typeTask">
                                    <option value=''>Seleccione</option>
                                    <option value="Casa">Casa</option>
                                    <option value="Escuela">Escuela</option>
                                    <option value="Trabajo">Trabajo</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormTask;