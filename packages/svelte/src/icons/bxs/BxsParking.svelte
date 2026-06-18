<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.5 3H5v18h4v-5h4.5c3.58 0 6.5-2.92 6.5-6.5S17.08 3 13.5 3zm0 9H9V7h4.5C14.88 7 16 8.12 16 9.5S14.88 12 13.5 12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
