<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.85 6.15 8 7.29l1.15-1.15a0.50.5 0 1 1 0.710.71L8.71 8l1.15 1.15a0.50.5 0 0 1-0.710.71L8 8.71 6.85 9.85a0.50.5 0 0 1-0.71-0.71L7.29 8 6.15 6.85a0.50.5 0 1 1 0.71-0.71"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
