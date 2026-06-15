<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.47 5.49L13.48 7.49L8.92 7.51L18.53 17.09L17.11 18.51L7.48 8.89L7.49 13.51L5.49 13.51L5.47 5.51L13.47 5.49Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
