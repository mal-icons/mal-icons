<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-0.5 0-0.90.4-0.90.9v16.2c0 0.40.40.90.90.9h16.2c0.4 0 0.9-0.50.9-0.9V3.9c0-0.5-0.5-0.9-0.9-0.9zM19 19H5V5h14v14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
