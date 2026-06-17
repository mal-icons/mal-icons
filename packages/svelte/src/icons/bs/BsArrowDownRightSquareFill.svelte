<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zM5.9 5.2 10 9.29V6.53a0.50.5 0 0 1 1 0V10.5a0.50.5 0 0 1-0.50.5H6.53a0.50.5 0 0 1 0-1h2.77L5.2 5.9a0.50.5 0 0 1 0.71-0.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
