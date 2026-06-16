<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h5v1c0 0.550.45 1 1 1s1-0.45 1-1V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1zm0 15H5l5-6v6zm9-15h-5v2h4c0.55 0 1 0.45 1 1v12l-5-6v9h5c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
