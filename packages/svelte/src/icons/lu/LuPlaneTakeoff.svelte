<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 22h20"}],["path",{"d":"M6.36 17.4 4 17l-2-4 1.1-0.55a2 2 0 0 1 1.8 0l0.170.1a2 2 0 0 0 1.8 0L8 12 5 6l0.9-0.45a2 2 0 0 1 2.090.2l4.02 3a2 2 0 0 0 2.10.2l4.19-2.06a2.41 2.41 0 0 1 1.73-0.17L21 7a1.4 1.4 0 0 1 0.87 1.99l-0.380.76c-0.230.46-0.60.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.220.18Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
