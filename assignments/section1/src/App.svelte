<script>
  import Card from "./Card.svelte";

  let courseGoal = "";
</script>

<input type="text" bind:value={courseGoal} />
<Card goalName={courseGoal} />