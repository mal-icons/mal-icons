<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 6h6v12H9z","opacity":".3"}],["path",{"d":"M17 5v16c0 0.55-0.45 1-1 1H8c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1h2V2h4v2h2c0.55 0 1 0.45 1 1zm-2 1H9v12h6V6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
