<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 18h14v3H5zm7.5-14h-1c-0.4 0-0.760.24-0.920.61L5.75 16h2.17l1.27-3h5.6l1.27 3h2.17L13.42 4.61A1 1 0 0 0 12.5 4zm-2.46 7 1.96-4.62L13.95 11h-3.91z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
