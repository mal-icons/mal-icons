<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0 1.61 6v12L12 24l10.39-6V6L12 0zM8.32 5.38h3L7.5 12h-3l3.82-6.62zm6 0h3L9.68 18.62h-3l7.65-13.25zm2.18 6.62h3l-3.82 6.62h-3L16.5 12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
