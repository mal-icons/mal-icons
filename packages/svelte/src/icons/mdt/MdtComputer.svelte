<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h16v10H4z","opacity":".3"}],["path",{"d":"M20 18c1.1 0 1.99-0.9 1.99-2L22 6c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
