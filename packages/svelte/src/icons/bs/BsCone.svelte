<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.03 1.88c0.25-1.01 1.69-1.01 1.94 0l2.91 11.62H14a0.50.5 0 0 1 0 1H2a0.50.5 0 0 1 0-1h2.13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
