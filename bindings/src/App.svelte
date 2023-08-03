<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  import { isValidEmail } from './validation.js';

  let value = "";
  let price = 0;
  let selectedOption = 1;
  let agreed;
  let favColor = 'red';
  let singleFavColor = 'red'
  let userNameInput;
  let someDiv;
  let customInput;
  let enteredEmail = '';
  let formIsValid = false;

  $: if (isValidEmail(enteredEmail)) {
    formIsValid = true 
  } else {
    formIsValid = false;
  }

  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(singleFavColor);
  $: console.log(customInput);

  function saveData() {
    //console.log(document.querySelector('#username').value);
    console.log(userNameInput.value);
    console.dir(userNameInput);
    console.dir(someDiv);
    customInput.empty();
  }
</script>

<!-- <input type="text" bind:value>  -->

<CustomInput bind:value bind:this={customInput} />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
    <input type="checkbox" bind:checked={agreed}>
    Agree to terms?
</label>

<h1>Favorite Color?</h1>
<label>
    <input type="radio" name="color" value="red" bind:group={favColor}>
    Red
</label>
<label>
    <input type="radio" name="color" value="green" bind:group={favColor}>
    Green
</label>
<label>
    <input type="radio" name="color" value="blue" bind:group={favColor}>
    Blue
</label>

<select bind:value={singleFavColor}>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
</select>

<hr>

<!-- bind:this is now a pointer to the full HTML element -->
<input type="text" id="username" bind:this={userNameInput}>
<button on:click={saveData}>Save</button>

<div bind:this={someDiv}></div>

<form on:submit|preventDefault>
    <input type="email" bind:value={enteredEmail} class="{isValidEmail(enteredEmail) ? '' : 'invalid'}">
    <button type="submit" disabled={!formIsValid}>Save</button>
</form>

<style>
    .invalid {
        border: 1px solid red;
    }
</style>
