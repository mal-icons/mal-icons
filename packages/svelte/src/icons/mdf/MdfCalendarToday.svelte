<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 18H4V8h16v13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
