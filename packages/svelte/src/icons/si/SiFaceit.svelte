<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 2.71a0.170.17 0 0-0.31-0.1 1141.27 1141.27 0 0-6.05 9.38H0.22c-0.22 0-0.30.28-0.110.35 7.23 2.73 17.67 6.84 23.5 9.130.150.060.39-0.080.39-0.18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
