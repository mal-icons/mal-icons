<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.78 0L7.04 24H1.87L14.61 0h5.17zm2.35 19.8c0 2.27-1.84 4.11-4.11 4.11s-4.11-1.84-4.11-4.11 1.84-4.11 4.11-4.11 4.11 1.84 4.11 4.11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
