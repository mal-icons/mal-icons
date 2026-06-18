<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22C6.48 22 2 17.53 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.59 4 4 7.58 4 12C4 16.42 7.59 20 12 20ZM9 13H8V11H9V10C9 8.07 10.57 6.5 12.5 6.5C13.97 6.5 15.23 7.41 15.75 8.69L13.76 9.19C13.5 8.78 13.03 8.5 12.5 8.5C11.68 8.5 11 9.17 11 10V11H14V13H11V15H16V17H8V15H9V13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
