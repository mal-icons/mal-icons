<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.9 17.86L7.81 13.95L10.64 16.78L15.21 12.21L17 14V9H12L13.8 10.8L10.64 13.95L7.81 11.12L2.87 16.07C2.31 14.83 2 13.45 2 12C2 6.48 6.48 2 12 2C17.53 2 22 6.48 22 12C22 17.53 17.53 22 12 22C8.67 22 5.72 20.37 3.9 17.86Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
