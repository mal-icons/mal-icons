<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.65 14.71 12 18l3.35-3.29a2.13 2.13 0 0 0 0-3.07 2.23 2.23 0 0 0-3.13 0l-0.220.22-0.22-0.22a2.22 2.22 0 0 0-3.12 0 2.13 2.13 0 0 0 0 3.07z"}],["path",{"d":"M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 16H5V8h14l0 12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
