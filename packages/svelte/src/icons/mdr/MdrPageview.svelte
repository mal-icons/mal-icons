<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-3.92 13.5-2.2-2.2c-0.90.58-2.030.84-3.220.62-1.88-0.35-3.38-1.93-3.62-3.83a4.51 4.51 0 0 1 5.21-5.04c1.880.3 3.39 1.84 3.7 3.71a4.43 4.43 0 0 1-0.64 3.12l2.2 2.19a1.01 1.01 0 0 1-1.43 1.43z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
