<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0Zm11.06 3.36h1.87v2.76L10.41 9.2h2.53v3.75h4.58l-4.58 5.59v2.1h-1.88v-2.76l2.53-3.09h-2.53V11.05h-4.58l4.58-5.59Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
