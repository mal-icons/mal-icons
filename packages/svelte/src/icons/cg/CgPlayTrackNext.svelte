<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 17L14 12L6 7V17Z","fill":"currentColor"}],["path",{"d":"M18 7H15V12V17H18V7Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
