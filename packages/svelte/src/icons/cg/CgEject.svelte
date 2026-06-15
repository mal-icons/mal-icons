<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.95 14.39L18.36 12.98L12 6.62L5.64 12.98L7.05 14.39L12 9.45L16.95 14.39Z","fill":"currentColor"}],["path",{"d":"M6 17.38H18V15.38H6V17.38Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
