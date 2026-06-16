<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 7h10v1.79c0 0.450.540.670.850.35l2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.79-2.79a0.50.5 0 0 0-0.850.36V5H6c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1s1-0.45 1-1V7zm10 10H7v-1.79c0-0.45-0.54-0.67-0.85-0.35l-2.79 2.79c-0.20.2-0.20.51 0 0.71l2.79 2.79a0.50.5 0 0 0 0.85-0.36V19h11c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1s-1 0.45-1 1v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
