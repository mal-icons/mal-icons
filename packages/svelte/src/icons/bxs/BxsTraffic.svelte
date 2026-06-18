<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m2.96 16 0.04 1.04c0.010.120.14 2.26 3 3.34v1.12a0.50.5 0 0 0 0.50.5h11a0.50.5 0 0 0 0.5-0.5v-1.12c2.86-1.08 2.99-3.22 3-3.34L21.04 16H18v-1.62c2.86-1.08 2.99-3.22 3-3.34L21.04 10H18V8.38c2.86-1.08 2.99-3.22 3-3.34L21.04 4H18V2.5a0.50.5 0 0 0-0.5-0.5h-11a0.50.5 0 0 0-0.50.5V4H2.96l0.04 1.04c0.010.120.14 2.26 3 3.34V10H2.96l0.04 1.04c0.010.120.14 2.26 3 3.34V16H2.96zM12 4a2 2 0 1 10 4A2 2 0 0 1 12 4zm0 6a2 2 0 1 10 4A2 2 0 0 1 12 10zm0 6a2 2 0 1 10 4A2 2 0 0 1 12 16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
