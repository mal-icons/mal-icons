<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 5a0.50.5 0 0 0-1 0v3H6a0.50.5 0 0 0 0 1h2.5a0.50.5 0 0 0 0.5-0.5z"}],["path",{"d":"M4 1.67v0.38A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v0.38C4 15.25 4.75 16 5.67 16h4.67c0.92 0 1.67-0.75 1.67-1.67v-0.38a2.5 2.5 0 0 0 2-2.45V8h0.5a0.50.5 0 0 0 0.5-0.5v-2a0.50.5 0 0 0-0.5-0.5H14v-0.5a2.5 2.5 0 0 0-2-2.45v-0.38C12 0.75 11.25 0 10.33 0H5.67C4.75 0 4 0.75 4 1.67M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
