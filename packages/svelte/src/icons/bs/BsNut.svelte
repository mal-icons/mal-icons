<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m11.42 2 3.43 6-3.43 6H4.58L1.15 8 4.58 2zM4.58 1a1 1 0 0 0-0.870.5l-3.43 6a1 1 0 0 0 0 0.99l3.43 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 0.87-0.5l3.43-6a1 1 0 0 0 0-0.99l-3.43-6A1 1 0 0 0 11.42 1z"}],["path",{"d":"M6.85 5.93a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.92a3.5 3.5 0 1 1 6.06-3.5 3.5 3.5 0 0 1-6.06 3.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
