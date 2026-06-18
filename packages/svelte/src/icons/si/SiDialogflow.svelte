<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0a1.64 1.64 0 0 0-0.820.22L3.34 4.74a1.65 1.65 0 0 0-0.530.5l9.14 5.28 9.21-5.32a1.65 1.65 0 0 0-0.51-0.46L12.820.22a1.64 1.64 0 0 0-0.82-0.22zm9.34 5.5l-9.39 5.42-9.3-5.37a1.65 1.65 0 0 0-0.120.62v9.04a1.64 1.64 0 0 0 0.82 1.42l3.92 2.27v4.62a0.490.49 0 0 0 0.740.42l12.65-7.3a1.64 1.64 0 0 0 0.82-1.42V6.16a1.65 1.65 0 0 0-0.14-0.66z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
