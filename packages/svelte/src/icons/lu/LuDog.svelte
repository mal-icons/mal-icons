<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.25 16.25h1.5L12 17z"}],["path",{"d":"M16 14v0.5"}],["path",{"d":"M4.42 11.25A13.15 13.15 0 0 0 4 14.56C4 18.73 7.58 21 12 21s8-2.27 8-6.44a11.7 11.7 0 0 0-0.49-3.31"}],["path",{"d":"M8 14v0.5"}],["path",{"d":"M8.5 8.5c-0.38 1.05-1.08 2.03-2.34 2.5-1.930.72-3.58-0.3-3.66-1-0.11-0.99 1.18-6.53 4-7 1.92-0.32 3.650.85 3.65 2.24A7.5 7.5 0 0 1 14 5.28c0-1.39 1.84-2.6 3.77-2.28 2.820.47 4.11 6.01 4 7-0.080.7-1.72 1.72-3.66 1-1.26-0.47-1.85-1.45-2.24-2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
