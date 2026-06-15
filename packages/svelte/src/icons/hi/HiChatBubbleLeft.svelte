<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 12.76c0 1.6 1.12 2.99 2.71 3.23 1.090.16 2.190.28 3.290.37V21l4.08-4.08a1.53 1.53 0 0 1 1.04-0.44 48.28 48.28 0 0 0 5.68-0.49c1.58-0.23 2.71-1.63 2.71-3.23V6.74c0-1.6-1.12-2.99-2.71-3.23A48.39 48.39 0 0 0 12 3c-2.39 0-4.740.18-7.040.51C3.37 3.75 2.25 5.14 2.25 6.74v6.02Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
