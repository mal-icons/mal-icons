<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m19.41 7.41-4.83-4.83c-0.37-0.37-0.88-0.58-1.41-0.58H6c-1.1 0-1.990.9-1.99 2L4 20c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8.83c0-0.53-0.21-1.04-0.59-1.42zM14.8 15H13v3c0 0.55-0.45 1-1 1s-1-0.45-1-1v-3H9.21c-0.45 0-0.67-0.54-0.35-0.85l2.8-2.79c0.2-0.190.51-0.190.71 0l2.79 2.79c0.30.310.080.85-0.360.85zM14 9c-0.55 0-1-0.45-1-1V3.5L18.5 9H14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
