<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.86 8.49-3-5A11 0 0 0 18 3h-4.59l-0.71-0.71a11 0 0 0-1.41 0L10.59 3H6a11 0 0 0-0.860.49l-3 5A1 1 0 0 0 2 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h0c0-0.18-0.05-0.36-0.14-0.51zM20 18h-6v-4h-4v4H4v-8h2.41l0.29-0.29 2-2L12 4.41l4.29 4.29 1 1 0.290.29H20v8z"}],["circle",{"cx":"11.9","cy":"9.9","r":"2.11"}],["path",{"d":"M6 12h2v3H6zm10 0h2v3h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
