<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"opacity":"0.3","x":"3","y":"10","width":"18","height":"4","rx":"2","fill":"currentColor"}],["rect",{"x":"7","y":"10","width":"10","height":"4","rx":"2","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
