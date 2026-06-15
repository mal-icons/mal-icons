<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9.14 17.08a24.25 24.25 0 0 0 3.840.15m-3.84-0.15a23.86 23.86 0 0 1-5.45-1.31 8.96 8.96 0 0 0 2.3-5.54m3.16 6.85a3 3 0 0 0 5.67 1.97m1.97-2.28L21 21m-4.22-4.22a23.81 23.81 0 0 0 3.54-1A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.25 10.25L6.53 6.53M3 3l3.53 3.53"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
