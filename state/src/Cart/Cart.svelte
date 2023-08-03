<script>
  import { onDestroy } from "svelte";
  import cartItems from "./cart-store";
  import { timer } from "../timer-store"
  import CartItem from "./CartItem.svelte";

  const unsubscribe = timer.subscribe(count => {
    console.log('Cart ' + count);
  })

  // NOTE: this syntax is good to know if you need to transform the data prior to displaying it

  // let items;

  // const unsubscribe = cartItems.subscribe((its) => {
  //   items = its;
  // });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  })
</script>

<section>
  <h1>Cart</h1>
  <ul>
    <!-- $importedItemName can be any data type, not just arrays -->
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
