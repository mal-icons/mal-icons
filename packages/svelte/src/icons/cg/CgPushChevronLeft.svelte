<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.93 5L18.34 6.41L12.69 12.07L18.34 17.73L16.93 19.14L9.86 12.07L16.93 5Z","fill":"currentColor"}],["path",{"d":"M8 19V5H6V19H8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
