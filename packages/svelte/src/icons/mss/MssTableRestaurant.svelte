<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M146-580h667l-45-160H193l-47 160Zm334-80ZM255-420h450l-13-100H269l-14 100Zm-95 260 49-360H67l80-280h666l80 280H752l48 360h-60l-27-200H247l-27 200h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
