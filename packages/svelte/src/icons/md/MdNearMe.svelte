<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m17.27 6.73-4.24 10.13-1.32-3.42-0.32-0.83-0.82-0.32-3.43-1.33 10.13-4.23M21 3 3 10.53v0.98l6.84 2.65L12.48 21h0.98L21 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
