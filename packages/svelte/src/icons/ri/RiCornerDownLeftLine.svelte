<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 14L19 5L17 5L17 12L6.83 12L10.78 8.05L9.36 6.64L3 13L9.36 19.36L10.78 17.95L6.83 14L19 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
