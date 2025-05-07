import React, { useState } from 'react';

// Компонент для списка записей
function NoteList({ notes, onSelectNote, onDeleteNote }) {
    return (
        <div>
            <h2>Список записей</h2>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <span onClick={() => onSelectNote(index)}>{note.title}</span>
                        <button onClick={() => onDeleteNote(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Компонент для редактирования и создания записей
function NoteEditor({ note, onSave }) {
    const [title, setTitle] = useState(note ? note.title : '');
    const [content, setContent] = useState(note ? note.content : '');

    const handleSave = () => {
        onSave({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>{note ? 'Редактировать запись' : 'Создать новую запись'}</h2>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Содержимое"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
}

// Основной компонент приложения
function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectNote = (index) => {
        setSelectedNoteIndex(index);
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        if (selectedNoteIndex === index) {
            setSelectedNoteIndex(null); // Сбросить выбранную запись
        }
    };

    const handleSaveNote = (note) => {
        if (selectedNoteIndex !== null) {
            // Редактируем существующую запись
            const updatedNotes = [...notes];
            updatedNotes[selectedNoteIndex] = note;
            setNotes(updatedNotes);
        } else {
            // Создаем новую запись
            setNotes([...notes, note]);
        }
        setSelectedNoteIndex(null);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
                <input
                    type="text"
                    placeholder="Поиск записей"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <NoteList
                    notes={filteredNotes}
                    onSelectNote={handleSelectNote}
                    onDeleteNote={handleDeleteNote}
                />
            </div>
            <div>
                <NoteEditor
                    note={selectedNoteIndex !== null ? notes[selectedNoteIndex] : null}
                    onSave={handleSaveNote}
                />
            </div>
        </div>
    );
}

export default NoteApp;
