<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.66 3.6a3 3 0 0 0-4.24 0l-0.710.71-7.07 7.07 2.12 2.12-6.36 6.36 1.41 1.42L19.66 6.43c1.1-1.1 1.1-1.730.71-2.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
