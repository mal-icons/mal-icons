<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m7.65 9.35-3.79 3.79a0.50.5 0 0 0 0.350.85h7.59a0.50.5 0 0 0 0.35-0.85L8.35 9.35a0.50.5 0 0 0-0.71 0"}],["path",{"d":"M11.41 11H14.5a0.50.5 0 0 0 0.5-0.5v-7a0.50.5 0 0 0-0.5-0.5h-13a0.50.5 0 0 0-0.50.5v7a0.50.5 0 0 0 0.50.5h3.09l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
