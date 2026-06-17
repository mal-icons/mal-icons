<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm5 0a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h3a0.50.5 0 0 0 0.5-0.5z"}],["path",{"d":"M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"}],["path",{"d":"M8 6.98C9.66 5.31 13.83 8.24 8 12 2.17 8.24 6.34 5.31 8 6.98"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
