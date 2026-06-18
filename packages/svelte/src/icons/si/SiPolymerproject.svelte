<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.4 3.69L7.2 16.16 4.8 12l4.8-8.31H4.8L0 12l2.4 4.16 2.4 4.16h4.8l7.2-12.47L19.2 12l-4.8 8.31h4.8l2.4-4.15L24 12l-2.4-4.15-2.4-4.16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
