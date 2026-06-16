<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10c-1.1 0-2 0.9-2 2h-1V3L3 8v13h18v-9c0-1.1-0.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
