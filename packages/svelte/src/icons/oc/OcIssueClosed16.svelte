<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.28 6.78a0.750.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a0.750.75 0 0 0-1.06 1.06l2 2a0.750.75 0 0 0 1.06 0l3.5-3.5Z"}],["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
