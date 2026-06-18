<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m14.72 5.6-2.24 8.68-2.12-8.68H7.47l-2.12 8.68L3.11 5.6H0l4.01 12.65h2.74l2.17-8.18 2.16 8.18h2.74L17.83 5.6zm5.1 10.7c0 1.20.9 2.1 2.09 2.1 1.2 0 2.09-0.9 2.09-2.1s-0.9-2.12-2.1-2.12c-1.19 0-2.080.9-2.08 2.11"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
