<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.53 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.59 4 4 7.58 4 12C4 16.42 7.59 20 12 20ZM9 8H15L17.5 11.5L12 17L6.5 11.5L9 8ZM10.03 10L9.11 11.29L12 14.18L14.89 11.29L13.97 10H10.03Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
