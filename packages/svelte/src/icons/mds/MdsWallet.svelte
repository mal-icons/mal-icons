<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 4H2v16h20V4zm-6.25 10.09L4 11.22V10h16v0.53l-4.25 3.56zM4 6h16v2H4V6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
