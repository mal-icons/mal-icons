<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.41 14.53L7.81 11.12L10.64 13.95L13.8 10.8L12 9H17V14L15.21 12.21L10.64 16.78L7.81 13.95L5.34 16.43C6.77 18.58 9.22 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.59 4 4 7.58 4 12C4 12.88 4.15 13.73 4.41 14.53ZM2.87 16.08L2.86 16.07L2.87 16.07C2.31 14.83 2 13.45 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22C7.94 22 4.43 19.57 2.87 16.08Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
