<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M230-780q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T230-840h500q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T730-780H230Zm250 660q-117 0-198.5-81.5T200-400q0-117 81.5-198.5T480-680q117 0 198.5 81.5T760-400q0 117-81.5 198.5T480-120Zm0-80q84 0 142-58t58-142q0-84-58-142t-142-58q-84 0-142 58t-58 142q0 84 58 142t142 58Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
