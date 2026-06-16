<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.99 8c0-0.72-0.37-1.35-0.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2l-0.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
