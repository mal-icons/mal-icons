<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.79 16.95c3.03-0.39 5.21-3.11 5.21-6.16V4.25a1.25 1.25 0 0 0-2.5 0v6.65c0 1.67-1.13 3.19-2.77 3.52A3.49 3.49 0 0 1 8.5 11V4.25a1.25 1.25 0 0 0-2.5 0V11c0 3.57 3.13 6.42 6.79 5.95zM5 20c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
