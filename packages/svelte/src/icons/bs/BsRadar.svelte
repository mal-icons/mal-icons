<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.63 1.14A7 7 0 0 1 15 8a0.50.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1A5 5 0 1 1 13 8a0.50.5 0 0 1-1 0 4 4 0 1 0-4.5 3.97v-1.01A3 3 0 1 1 11 8a0.50.5 0 0 1-1 0 2 2 0 1 0-2.5 1.94v-1.07a1 1 0 1 1 1 0V15.5a0.50.5 0 0 1-1 0v-0.52a7 7 0 0 1-0.87-13.85"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
