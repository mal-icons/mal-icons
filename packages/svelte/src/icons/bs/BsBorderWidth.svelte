<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 3.5A0.50.5 0 0 1 0.5 3h15a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zm0 5A0.50.5 0 0 1 0.5 8h15a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zm0 4a0.50.5 0 0 1 0.5-0.5h15a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
