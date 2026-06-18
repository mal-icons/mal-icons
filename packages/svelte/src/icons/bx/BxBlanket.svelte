<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h12c1.65 0 3-1.35 3-3s-1.35-3-3-3H6v2h13a1 1 0 0 1 0 2H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h13c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 10H7a4.97 4.97 0 0 0-3 1V7c0-1.65 1.35-3 3-3h13v8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
