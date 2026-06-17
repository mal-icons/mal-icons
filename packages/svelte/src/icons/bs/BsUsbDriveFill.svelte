<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 0.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0.50.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM5.5 5a0.50.5 0 0 0-0.50.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a0.50.5 0 0 0-0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
