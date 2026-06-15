<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M21 7.5V18M15 7.5V18M3 16.81V8.69c0-0.860.93-1.41 1.68-0.98l7.11 4.06a1.13 1.13 0 0 1 0 1.95l-7.11 4.06A1.13 1.13 0 0 1 3 16.81Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
