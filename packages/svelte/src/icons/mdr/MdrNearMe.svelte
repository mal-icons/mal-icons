<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.75 3.94 4.07 10.08c-0.830.35-0.81 1.530.02 1.85L9.43 14a1 1 0 0 1 0.570.57l2.06 5.33c0.320.84 1.510.86 1.860.03l6.15-14.67c0.33-0.83-0.5-1.66-1.32-1.32z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
