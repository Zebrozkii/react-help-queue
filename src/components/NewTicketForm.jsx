import React from 'react';

function NewTicketForm(){
  let _name=null;
  let _location=null;
  let _issue=null;
  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    console.log(_name.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) =>{_name = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) =>{_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) =>{_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
