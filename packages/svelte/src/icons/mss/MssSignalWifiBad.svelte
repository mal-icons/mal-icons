<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-120 0-600q99-94 221-147t259-53q137 0 259 53t221 147L810-450H480v330Zm108 0-38-38 92-92-92-92 38-38 92 92 92-92 38 38-92 92 92 92-38 38-92-92-92 92Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
