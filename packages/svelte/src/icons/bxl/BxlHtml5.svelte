<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.14 3.01h15.73l-1.43 16.15-6.45 1.83-6.41-1.83-1.43-16.15zm5.27 7.3-0.17-2.03 7.5300.17-1.96-9.8700.52 6h6.84l-0.24 2.57-2.180.6-2.21-0.6-0.14-1.58H7.69l0.25 3.12L12 17.51l4.03-1.080.56-6.11H9.4v0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
