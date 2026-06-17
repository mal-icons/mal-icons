<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.79L8.15 5.35a0.50.5 0 1 1 0.71-0.71l3 3a0.50.5 0 0 1 0 0.71l-3 3a0.50.5 0 0 1-0.71-0.71L10.29 8.5H4.5a0.50.5 0 0 1 0-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
