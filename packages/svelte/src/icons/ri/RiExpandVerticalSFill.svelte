<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.95 7.45L12 2.5L7.05 7.45L11 7.45L11 16.55L7.05 16.55L12 21.5L16.95 16.55L13 16.55L13 7.45L16.95 7.45Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
