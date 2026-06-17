<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 4.5a0.50.5 0 0 1 0.5-0.5h2v2H5zM8.5 6V4h2a0.50.5 0 0 1 0.50.5V6zM5 7h6v2H5zm3.5 3H11v1.5a0.50.5 0 0 1-0.50.5h-2zm-1 0v2h-2a0.50.5 0 0 1-0.5-0.5V10z"}],["path",{"d":"M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.41a1.5 1.5 0 0 0-0.44-1.06L11.650.44A1.5 1.5 0 0 0 10.59 0zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
