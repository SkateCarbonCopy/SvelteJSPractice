<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";

  let scrollYVal;

  let title = "My app";

  $: console.log(scrollYVal);

  let familyStructure = [
    {
      isParent: true,
      name: "Chris",
      children: [
        {
          isParent: true,
          name: "Moe",
          children: [{ isParent: false, name: "Julie" }],
        },
      ],
    },
    {
      isParent: false,
      name: "Anna",
      //children: [{ isParent: false, name: "Carl" }],
    },
  ];

  let renderedComponent = { cmp: Product, title: "Test Product", id: "p1" };

  function toggle() {
    if (renderedComponent.cmp === Product) {
      renderedComponent = { cmp: CartItem, title: "Another Product", id: "p2" };
    } else {
      renderedComponent = { cmp: Product, title: "Test Product", id: "p1" };
    }
  }

  function switchTitle() {
    title = "My new title";
  }
</script>

<style>
  div {
    height: 3000px;
  }
</style>

<!-- Interact with JS window object -->
<svelte:window
  on:keydown={() => {
    console.log("keydown");
  }}
  bind:scrollY={scrollYVal} />
<!-- Interact with document.body -->
<svelte:body
  on:mouseenter={() => {
    console.log("do something");
  }} />
<!-- Set the page title -->
<svelte:head>
  <!-- can set other items that should be in page head at this time.  -->
  <title>{title}</title>
</svelte:head>

<button on:click={switchTitle}>Switch Title</button>

<div>
  <button on:click={toggle}>Toggle Display</button>

  <svelte:component
    this={renderedComponent.cmp}
    title={renderedComponent.title}
    id={renderedComponent.id} />

  {#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
  {/each}
</div>
