<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 16H5V8h14l0 12z"}],["path",{"d":"m11 17.41 5.71-5.71-1.41-1.41L11 14.59l-2.29-2.29-1.41 1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
