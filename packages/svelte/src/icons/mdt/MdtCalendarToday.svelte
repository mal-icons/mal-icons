<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"}],["path",{"d":"M4 5.01h16V8H4z","opacity":".3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
