<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.540.15A0.50.5 0 0 1 4.89 0h6.21a0.50.5 0 0 1 0.350.15l4.39 4.39a0.50.5 0 0 1 0.150.35v6.21a0.50.5 0 0 1-0.150.35l-4.39 4.39a0.50.5 0 0 1-0.350.15H4.89a0.50.5 0 0 1-0.35-0.15L0.15 11.46A0.50.5 0 0 1 0 11.11V4.89a0.50.5 0 0 1 0.15-0.35zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
