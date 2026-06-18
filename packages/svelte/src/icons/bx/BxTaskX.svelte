<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 20c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.1 0-2 0.9-2 2v15zM5 5h2v2h10V5h2v15H5V5z"}],["path",{"d":"M14.29 10.3 12 12.59l-2.29-2.29-1.41 1.41 2.29 2.29-2.29 2.29 1.41 1.41L12 15.42l2.29 2.29 1.41-1.41-2.29-2.29 2.29-2.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
