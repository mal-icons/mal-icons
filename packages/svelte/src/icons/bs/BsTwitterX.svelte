<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.60.75h2.45l-5.36 6.14L16 15.25h-4.94l-3.87-5.07-4.42 5.07H0.32l5.73-6.57L0 0.75h5.06l3.5 4.63L12.60.75Zm-0.86 13.03h1.36L4.32 2.15H2.87z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
