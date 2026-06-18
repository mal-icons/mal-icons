<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 7H11C7.69 7 5 9.69 5 13C5 16.31 7.69 19 11 19H20V21H11C6.58 21 3 17.42 3 13C3 8.58 6.58 5 11 5H16V1L22 6L16 11V7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
