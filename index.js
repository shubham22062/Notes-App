document.getElementById('add-note').addEventListener('click', addNote);

function addNote() {
    const noteText = document.getElementById("note-text").value;
    if (noteText.trim() === '') {
        alert('Please write something in the note');
        return;
    }

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');

    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        noteContainer.remove();
    });

    noteContainer.appendChild(noteContent);
    noteContainer.appendChild(deleteButton);

    document.getElementById('notes-container').appendChild(noteContainer);
    document.getElementById('note-text').value = '';
}
