<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.07 17V15H11.07V17H19.07Z","fill":"currentColor"}],["path",{"d":"M19.07 9V7H11.07V9H19.07Z","fill":"currentColor"}],["path",{"d":"M19.07 13V11H9.07V7.96L5 11.96L9.07 15.96V13H19.07Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
