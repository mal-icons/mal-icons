<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 7H5V17H2V7Z","fill":"currentColor"}],["path",{"d":"M6 12L13 7V17L6 12Z","fill":"currentColor"}],["path",{"d":"M21 7L14 12L21 17V7Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
