<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { fade, fly, slide, scale } from "svelte/transition";
  import { flip } from 'svelte/animate';

  import Spring from "./Spring.svelte";

  // instead of writable(0), we use tweened for a build in animation
  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxInput;
  let boxes = [];

  let showParagraph = false;

  function addBox() {
    boxes = [boxInput.value, ...boxes];
  }

  function discard(value) {
    boxes = boxes.filter((el) => el !== value);
  }
</script>

<style>
  div {
    width: 10rem;
    height: 10rem;
    background: #ccc;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: 1rem;
  }
</style>

<!-- <progress value={$progress}></progress> -->
<!-- <Spring /> -->

<button
  on:click={() => {
    showParagraph = !showParagraph;
  }}>Toggle</button>

{#if showParagraph}
  <!-- These animations are not cancellable anymore since we're not using transition -->
  <p in:fade out:fly={{ x: 300 }}>Can you see me?</p>
{/if}

<hr />

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>

{#if !showParagraph}
  {#each boxes as box (box)}
    <div
      transition:fly|local={{ easing: cubicIn, opacity: 0.5, x: 0, y: 300 }}
      on:click={discard.bind(this, box)}
      on:introstart={() => console.log('Adding the element starts')}
      on:introend={() => console.log('Adding the element ends')}
      on:outrostart={() => console.log('Removing the element starts')}
      on:outroend={() => console.log('Removing the element ends')}
      animate:flip={{duration: 300}}>
      {box}
    </div>
  {/each}
{/if}
