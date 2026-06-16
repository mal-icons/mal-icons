<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"10","cy":"17","r":"2","opacity":".3"}],["path",{"d":"M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-0.59-0.34-1.27-0.55-2-0.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
