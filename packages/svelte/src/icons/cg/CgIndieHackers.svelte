<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6H7V18H4V6Z","fill":"currentColor"}],["path",{"d":"M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
