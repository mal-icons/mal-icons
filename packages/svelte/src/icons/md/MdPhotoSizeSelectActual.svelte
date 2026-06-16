<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3H3C2 3 1 4 1 5v14c0 1.10.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 15.92c-0.020.03-0.060.06-0.080.08H3V5.08L3.08 5h17.83c0.030.020.060.060.080.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
