<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 17.72c0.6-0.35 1-0.98 1-1.72V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v11c0 0.740.41 1.38 1 1.72V18H2v2h20v-2h-2v-0.28zM5 16V5h14l0 11H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
