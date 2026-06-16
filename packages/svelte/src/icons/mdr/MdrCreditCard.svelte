<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm-1 14H5c-0.55 0-1-0.45-1-1v-5h16v5c0 0.55-0.45 1-1 1zm1-10H4V6h16v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
