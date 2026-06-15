<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-0.52-0.35-0.97-0.85-1.09l-4.42-1.11c-0.44-0.11-0.90.06-1.170.42l-0.97 1.29c-0.280.38-0.770.54-1.210.38a12.04 12.04 0 0 1-7.14-7.14c-0.16-0.440-0.930.38-1.21l1.29-0.97c0.36-0.270.53-0.730.42-1.17L6.96 3.1a1.13 1.13 0 0 0-1.09-0.85H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
