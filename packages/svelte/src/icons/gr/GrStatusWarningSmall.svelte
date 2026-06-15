<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill-rule":"evenodd","stroke":"currentColor","stroke-linejoin":"round","points":"6 1 11 10 1 10"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {defaultAttr} {...props} />
