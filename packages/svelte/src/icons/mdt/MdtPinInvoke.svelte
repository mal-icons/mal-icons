<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 12v6c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h10v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34l2.13 2.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
