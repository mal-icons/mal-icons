<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 17H18V7H21V17Z","fill":"currentColor"}],["path",{"d":"M17 12L10 17V7L17 12Z","fill":"currentColor"}],["path",{"d":"M2 17L9 12L2 7V17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
