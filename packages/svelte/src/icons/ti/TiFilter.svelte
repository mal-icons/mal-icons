<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 6h-14c-1.1 0-1.40.6-0.6 1.4l4.2 4.2c0.80.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-0.80.6-2.1 1.4-2.9l4.2-4.2c0.8-0.80.5-1.4-0.6-1.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
