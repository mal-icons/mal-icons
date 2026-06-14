<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.57 4.43 6.18 7.82a0.250.25 0 0 0 0 0.35l3.4 3.4a0.250.25 0 0 0 0.43-0.18V4.6a0.250.25 0 0 0-0.43-0.18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
