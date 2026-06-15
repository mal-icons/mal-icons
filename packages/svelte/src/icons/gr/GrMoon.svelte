<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-linejoin":"round","stroke-width":"2","d":"M9.87 5.01c2.73-1.68 6.6-1.01 8.250.2-2.950.84-5.11 3.27-5.24 6.42-0.18 4.28 3.01 6.59 5.24 7.15-1.96 1.34-4.36 1.29-5.23 1.17-3.57-0.49-6.9-3.43-7.01-7.71-0.11-4.28 2.57-6.35 3.99-7.22z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
