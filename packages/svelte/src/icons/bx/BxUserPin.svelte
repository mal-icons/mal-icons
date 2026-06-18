<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 10c1.15 0 2-0.85 2-2s-0.85-2-2-2c-1.15 0-2 0.85-2 2s0.85 2 2 2zm0 1c-2.21 0-4 1.61-4 3.6v0.39h8V14.6c0-1.99-1.79-3.6-4-3.6z"}],["path",{"d":"M19 2H5c-1.1 0-2 0.9-2 2v13c0 1.10.9 2 2 2h4l3 3 3-3h4c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-5 15-2 2-2-2H5V4h14l0 13H14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
