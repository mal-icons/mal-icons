<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10L19 19L17 19L17 12L6.83 12L10.78 15.95L9.36 17.36L3 11L9.36 4.64L10.78 6.05L6.83 10L19 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
