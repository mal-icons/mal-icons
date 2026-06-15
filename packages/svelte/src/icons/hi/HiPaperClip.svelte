<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m18.38 12.74-7.69 7.69a4.5 4.5 0 0 1-6.36-6.36l10.94-10.94A3 3 0 1 1 19.5 7.37L8.55 18.32m0.01-0.01-0.010.01m5.7-9.94-7.81 7.81a1.5 1.5 0 0 0 2.11 2.13"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
