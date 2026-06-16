<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 12h16v6H4zm0-6h16v2H4z","opacity":".3"}],["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
