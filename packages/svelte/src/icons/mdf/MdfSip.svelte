<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.5 10.5h2v1h-2z"}],["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-10 6.5H6.5v0.75H9c0.55 0 1 0.45 1 1V14c0 0.55-0.45 1-1 1H5v-1.5h3.5v-0.75H6c-0.55 0-1-0.45-1-1V10c0-0.550.45-1 1-1h4v1.5zm3 4.5h-2V9h2v6zm6-3c0 0.55-0.45 1-1 1h-2.5v2H14V9h4c0.55 0 1 0.45 1 1v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
