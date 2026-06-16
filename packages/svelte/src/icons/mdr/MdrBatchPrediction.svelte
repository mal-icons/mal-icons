<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 8H7c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V10c0-1.1-0.9-2-2-2zm-5 12.5c-0.55 0-1-0.45-1-1V19h2v0.5c0 0.55-0.45 1-1 1zm1-2.5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5zm5-11.5H6C6 5.67 6.67 5 7.5 5h9c0.83 0 1.50.67 1.5 1.5zm-1-3H7C7 2.67 7.67 2 8.5 2h7c0.83 0 1.50.67 1.5 1.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
