<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.63 9.75a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H8.25m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H12m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0h-0.37m-13.5 3.01c0 1.6 1.12 2.99 2.71 3.23 1.090.16 2.190.28 3.290.37V21l4.18-4.18a1.14 1.14 0 0 1 0.78-0.33 48.29 48.29 0 0 0 5.83-0.5c1.59-0.23 2.71-1.63 2.71-3.23V6.74c0-1.6-1.12-2.99-2.71-3.23A48.39 48.39 0 0 0 12 3c-2.39 0-4.740.18-7.040.51C3.37 3.75 2.25 5.14 2.25 6.74v6.02Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
