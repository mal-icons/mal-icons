<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1zm-8.65-4.65 2.79 2.79c0.320.320.860.10.86-0.35V9.21c0-0.45-0.54-0.67-0.85-0.35l-2.79 2.79c-0.20.19-0.20.51-0.010.7zM4 21h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1zM3 4c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1zm9 5h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
