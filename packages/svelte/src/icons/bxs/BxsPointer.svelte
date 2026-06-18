<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.98 13.21a1 1 0 0 0-0.4-1.02l-14-10a11 0 0 0-1.570.93l2 17a1 1 0 0 0 1.770.52l3.61-4.42 3.38 5.46 1.7-1.05-3.36-5.43 6.09-1.22a11 0 0 0 0.78-0.77z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
