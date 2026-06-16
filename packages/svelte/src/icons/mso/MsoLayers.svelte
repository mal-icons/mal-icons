<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-130 120-410l50-37 310 241 310-241 50 37-360 280Zm0-152L120-562l360-280 360 280-360 280Zm0-301Zm0 225 262-204-262-204-262 204 262 204Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
