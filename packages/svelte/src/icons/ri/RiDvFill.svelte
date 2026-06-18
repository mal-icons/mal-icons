<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 14.75C2.19 13.48 1 11.38 1 9C1 5.13 4.13 2 8 2C11.87 2 15 5.13 15 9C15 11.38 13.81 13.48 12 14.75V21C12 21.55 11.55 22 11 22H5C4.45 22 4 21.55 4 21V14.75ZM8 14C10.76 14 13 11.76 13 9C13 6.24 10.76 4 8 4C5.24 4 3 6.24 3 9C3 11.76 5.24 14 8 14ZM7 18V20H9V18H7ZM8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9C11 10.66 9.66 12 8 12ZM14 17V15.71C15.84 14.06 17 11.67 17 9C17 6.69 16.13 4.59 14.71 3H21C21.55 3 22 3.45 22 4V16C22 16.55 21.55 17 21 17H14ZM18 7V9H20V7H18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
