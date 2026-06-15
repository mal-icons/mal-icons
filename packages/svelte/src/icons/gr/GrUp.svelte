<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polyline",{"fill":"none","stroke":"currentColor","stroke-width":"2","points":"7.09 1.17 17.09 11.17 7.09 21.17","transform":"rotate(-89 12.086 11.174)"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
