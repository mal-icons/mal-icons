<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4C11.58 4 8 7.58 8 12C8 16.42 11.58 20 16 20V17C13.24 17 11 14.76 11 12C11 9.24 13.24 7 16 7V4Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
