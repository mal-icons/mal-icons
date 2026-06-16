<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 4v16h20V4H2zm11 5h4c0.55 0 1 0.45 1 1v4c0 0.55-0.45 1-1 1h-4V9zm-3.5 4.5v-1H6V9h5v2H9.5v-0.5h-2v1H11V15H6v-2h1.5v0.5h2zm5 0h2v-3h-2v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
