<script>
  export let goalName;

  function containsExclamation(str) {
    if (str.includes("!")) return true;
  }
</script>

<div class="card">
  <h1 class:red={containsExclamation(goalName)}>{goalName}</h1>
</div>

<style>
  .card {
    border: 1px solid black;
    padding: .5rem;
  }

  .red {
    color: red;
  }
</style>
