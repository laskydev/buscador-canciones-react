import React, { useState } from "react";

export const Form = ({setLyricSearch}) => {
        const [search, setSearch] = useState({
                artist: "",
                song: "",
        });
        const [error, setError] = useState(false);

        //Desestructuring
        const { artist, song } = search;

        //Read content for inputs and set in state
        const handleOnChangeInputs = (e) => {
                setSearch({
                        ...search,
                        [e.target.name]: e.target.value,
                });
        };

        //Call to APIS
        const handleSubmit = (e) => {
                e.preventDefault();

                //Validation
                if (artist.trim() === "" || song.trim() === "") {
                        setError(true);
                        return;
                }

                //Send to principal component
                setError(false);
                setLyricSearch(search);
        };
        return (
                <div className="bg-info">
                        {error && (
                                <p className="alert alert-danger text-center p-2">
                                        Todos los campos son obligatorios
                                </p>
                        )}
                        <div className="container">
                                <div className="row">
                                        <form
                                                className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                                                onSubmit={handleSubmit}
                                        >
                                                <fieldset>
                                                        <legend className="text-center">
                                                                Buscador Letras
                                                                Canciones
                                                        </legend>
                                                        <div className="row">
                                                                <div className="col-md-6">
                                                                        <div className="form-group">
                                                                                <label>
                                                                                        Artista
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        name="artist"
                                                                                        placeholder="Nombre Artista"
                                                                                        onChange={
                                                                                                handleOnChangeInputs
                                                                                        }
                                                                                        value={
                                                                                                artist
                                                                                        }
                                                                                />
                                                                        </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                        <div className="form-group">
                                                                                <label>
                                                                                        Canción
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        name="song"
                                                                                        placeholder="Nombre Canción"
                                                                                        onChange={
                                                                                                handleOnChangeInputs
                                                                                        }
                                                                                        value={
                                                                                                song
                                                                                        }
                                                                                />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <button
                                                                type="submit"
                                                                className="btn btn-primary float-right"
                                                        >
                                                                Buscar
                                                        </button>
                                                </fieldset>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};
