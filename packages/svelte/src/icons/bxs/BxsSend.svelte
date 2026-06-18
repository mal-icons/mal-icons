<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.43 11.1-17-8A1 1 0 0 0 3.03 4.24l1.21 4.85L12 12l-7.76 2.91-1.21 4.85a11 0 0 0 1.4 1.15l17-8a1 1 0 0 0 0-1.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
