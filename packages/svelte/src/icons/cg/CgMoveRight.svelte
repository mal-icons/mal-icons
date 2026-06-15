<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 17V15H13V17H5Z","fill":"currentColor"}],["path",{"d":"M5 9V7H13V9H5Z","fill":"currentColor"}],["path",{"d":"M5 13V11H15V7.96L19.07 11.96L15 15.96V13H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
