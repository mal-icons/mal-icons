<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h0.09a1.5 1.5 0 0 1 1.060.44l1.42 1.41A1.5 1.5 0 0 1 16 2.91V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-0.5A1.5 1.5 0 0 1 0 14.5z"}],["path",{"d":"M3 16h10v-5.5a0.50.5 0 0 0-0.5-0.5h-9a0.50.5 0 0 0-0.50.5zm9-16H4v5.5a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5zM9 1h2v4H9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
