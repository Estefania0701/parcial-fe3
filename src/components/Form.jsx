import React, { useState } from 'react'
import Message from './Message';
import Card from './Card';
import FormStyles from '../styles/Form.module.css';

const Form = () => {

    const [guest, setGuest] = useState({
        name: '',
        question: ''
    });

    const [showForm, setShowForm] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleNameChange = (e) => {
        setGuest({
            ...guest,
            name: e.target.value
        });
    }

    const handleQuestionChange = (e) => {
        setGuest({
            ...guest,
            question: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guest.name.trim().length >= 3 && guest.question.trim().length >= 6) {
            setShowForm(false);
            setShowErrorMessage(false);
            return;
        }
        setShowErrorMessage(true);
    }

    const resetForm = () => {
        setGuest({
            name: '',
            question: ''
        });
    }

    return (
        <>
            {!showForm && guest ? (
                <>
                    <Message text='Enviado' type='success' />
                    <Card guest={guest} />
                </>
            ) : (
                <>
                    <h2>¿Qué pregunta deseas hacerle al oráculo?</h2>
                    <h3>Por favor, ingresa tu nombre y tu pregunta para recibir la respuesta</h3>
                    <h4>¡Buena suerte!</h4>
                    <h5>*Nota: Las preguntas deben ser de sí o no</h5>

                    <form onSubmit={handleSubmit} className={FormStyles.formContainer}>

                        <div className={FormStyles.formGroup}>
                            <label htmlFor="name">Tu nombre:</label>
                            <input
                                type="text"
                                id="name"
                                value={guest.name}
                                onChange={handleNameChange}
                            />
                        </div>

                        <div className={FormStyles.formGroup}>
                            <label htmlFor="question">Tu pregunta:</label>
                            <textarea
                                id="question"
                                value={guest.question}
                                onChange={handleQuestionChange}
                            />
                        </div>

                        <button>Enviar</button>
                    </form>

                    <button onClick={resetForm}>Borrar todo</button>
                </>
            )}

            {showErrorMessage ? (
                <>
                    <Message text='Por favor, chequea que la información sea correcta' type='error' />
                </>
            ) : null}
        </>

    );
};

export default Form;
