<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m18 4-4 4h3v7c0 1.1-0.9 2-2 2s-2-0.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.10.9-2 2-2s2 0.9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
