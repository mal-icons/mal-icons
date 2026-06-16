<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm-8 9.79V14H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h3v-1.79c0-0.450.54-0.670.85-0.35l2.79 2.79c0.20.20.20.51 0 0.71l-2.79 2.79a0.50.5 0 0 1-0.85-0.36z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
