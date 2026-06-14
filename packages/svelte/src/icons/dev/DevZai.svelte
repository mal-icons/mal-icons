<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"m302.6 50-54.4 73.8H16.3L70.8 50zm278.8 426.2L527 550H295.9l54.4-73.8zM600 50 231.6 550H0L368.4 50z","clip-rule":"evenodd"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
