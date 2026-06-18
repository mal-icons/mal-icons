<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.16 12a4.57 4.57 0 1 1-9.15 0 4.57 4.57 0 0 1 9.15 0zm10.83 0a4.57 4.57 0 1 1-9.15 0 4.57 4.57 0 0 1 9.15 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
