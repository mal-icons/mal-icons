<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.21 2.05a0.50.5 0 0 0-0.42 0l-7.5 3.5a0.50.5 0 0 0 0.030.92l7.5 3a0.50.5 0 0 0 0.37 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.74l0.69-0.28a0.50.5 0 0 0 0.03-0.92z"}],["path",{"d":"M4.18 9.03a0.50.5 0 0 0-0.660.33l-0.5 1.7a0.50.5 0 0 0 0.290.61l4.5 1.8a0.50.5 0 0 0 0.37 0l4.5-1.8a0.50.5 0 0 0 0.29-0.6l-0.5-1.7a0.50.5 0 0 0-0.66-0.33L8 10.47z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
