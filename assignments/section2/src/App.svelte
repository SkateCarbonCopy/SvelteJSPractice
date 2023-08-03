<script>
  let password = "";
  let passwordArray = ["test1", "test2", "test3"];

  function addToPasswordArray() {
    passwordArray = [...passwordArray, password];
    password = "";
  }

  function removePassword(index) {
    passwordArray.splice(index, 1);
    passwordArray = passwordArray;
  }
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add a password input field and save the user input in a variable.</li>
  <li>
    Output "Too short" if the password is shorter than 5 characters and "Too
    long" if it's longer than 10.
  </li>
  <li>
    Output the password in a paragraph tag if it's between these boundaries.
  </li>
  <li>Add a button and let the user add the passwords to an array.</li>
  <li>Output the array values (= passwords) in a unordered list (ul tag).</li>
  <li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<hr />

<label for="password">Password:</label>
<input type="password" id="password" name="password" bind:value={password} />

{#if password.length < 5 && password.length}
  <p>Passwords must be longer than 4 characters.</p>
{:else if password.length > 10}
  <p>Passwords cannot be longer than 10 characters.</p>
{:else if password.length >= 5 && password.length <= 10}
  <p>{password}</p>
  <button on:click={addToPasswordArray}>Add to Password Array</button>
{/if}

<ul>
  <!-- using password as a key here assumes you'll never have any passwords with the same text -->
  {#each passwordArray as password, index (password)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li on:click={() => removePassword(index)}>
      {password}
    </li>
  {/each}
</ul>

{#if !passwordArray.length}
  <p>The password array is empty. Please add a password.</p>
{/if}
