import React, { useRef, useState, useContext } from 'react';
import styles from '/styles/components/Event_Editor.module.css';
import AuthContext from '@/context/auth-context';

const EventEditor = () => {
    const [toggled, setToggled] = useState('');
    
    const authContext = useContext(AuthContext);

    const titleEl = useRef(null);
    const descriptionEl = useRef(null);
    const dateEl = useRef(null);
    

    const handleToggle = (e) => {
        if (e.target.id === toggled) {
            setToggled('');
        } else {
            setToggled(e.target.id);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const title = titleEl.current.value;
        const description = descriptionEl.current.value;
        const date = dateEl.current.value;

        if ( title.trim().length === 0 || description.trim().length === 0 || date.trim().length === 0 ) {
            return;
        }

        const event = {title, description, date};
        console.log(event);

        const requestBody = {
            query: `
                mutation {
                    createEvent(eventInput: {title: "${title}", description: "${description}", date: "${date}" }) {
                        _id
                        title
                        description
                        date
                    }
                }
            `
        };

        const token = authContext.token;

        fetch('https://star-backend.onrender.com/graphql' , {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
        })
        .catch(err  => {
            console.log(err);
        })
    }
    
    return (
        <section className={styles.editor_section}>
            <div className={`${styles.add_event} ${styles.event_editor} ${toggled === 'add' ? styles.toggled : ''}`} >
                <div className={styles.toggle} id="add" onClick={handleToggle}>
                    <h2>{toggled === 'add' ? 'Add an Event!' : 'Add Event'}</h2>
                    <div className={`${styles.arrow_container} ${toggled === 'add' ? styles.toggled : ''}`} >
                        <div className={`${styles.arrow_left} ${styles.arrow}`} />
                        <div className={`${styles.arrow_right} ${styles.arrow}`} />
                    </div>
                </div>
                <div className={`${styles.collapse} ${toggled === 'add' ? styles.toggled : ''} ${styles.add}`}>
                    <form className={`${styles.event_form}`}>
                        <div className={`${styles.form_control}`}>
                            <label htmlFor='title'>Title:</label>
                            <input type='text' name='title' id='title' ref={titleEl}/>
                        </div>
                        <div className={`${styles.form_control}`}>
                            <label htmlFor='description'>Description:</label>
                            <textarea type='text' name='description' id='description' rows='4' cols='10' ref={descriptionEl}/>
                        </div>
                        <div className={`${styles.form_control}`}>
                            <label htmlFor='title'>Date:</label>
                            <input type='datetime-local' name='date' id='date' ref={dateEl}/>
                        </div>
                        <div className={`${styles.form_control}`}>
                            <button type='submit' onClick={onSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${styles.delete_event} ${styles.event_editor} ${toggled === 'delete' ? styles.toggled : ''}`} >
                <div className={styles.toggle} id="delete" onClick={handleToggle}>
                    <h2>Delete Event</h2>
                    <div className={`${styles.arrow_container} ${toggled === 'delete' ? styles.toggled : '' }`}>
                        <div className={`${styles.arrow_left} ${styles.arrow}`} />
                        <div className={`${styles.arrow_right} ${styles.arrow}`} />
                    </div>
                </div>
                <div className={`${styles.collapse} ${toggled === 'delete' ? styles.toggled : ''} ${styles.delete}`}>
                    {/* Content inside the collapse */}
                </div>
            </div>
        </section>
    );
};
    
export default EventEditor;