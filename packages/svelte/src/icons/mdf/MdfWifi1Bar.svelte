<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.53 17.46 12 21l-3.53-3.54c0.9-0.9 2.15-1.46 3.53-1.46s2.630.56 3.53 1.46z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
