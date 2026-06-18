<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 20H7V21C7 21.55 6.55 22 6 22H4C3.45 22 3 21.55 3 21V12H2V8H3V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V8H22V12H21V21C21 21.55 20.55 22 20 22H18C17.45 22 17 21.55 17 21V20ZM5 5V12H19V5H5ZM7.5 18C8.33 18 9 17.33 9 16.5C9 15.67 8.33 15 7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18ZM16.5 18C17.33 18 18 17.33 18 16.5C18 15.67 17.33 15 16.5 15C15.67 15 15 15.67 15 16.5C15 17.33 15.67 18 16.5 18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
