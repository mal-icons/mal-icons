<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"none","stroke":"currentColor","stroke-width":"2","points":"22 3.5 22 20 13 14 13 20 2 12 13 4 13 10"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
