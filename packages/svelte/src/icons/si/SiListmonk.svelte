<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 5.2A6.8 6.8 0 0 1 18.8 12 6.8 6.8 0 0 1 12 18.8 6.8 6.8 0 0 1 5.2 12 6.8 6.8 0 0 1 12 5.2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
