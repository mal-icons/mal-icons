<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 8a6.5 6.5 0 1 1 13 0A0.750.75 0 0 0 16 8a8 8 0 1 0-8 8 0.750.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z"}],["path",{"d":"m8.68 12.43 2.9 2.9a0.250.25 0 0 0 0.43-0.18V13h3.25a0.750.75 0 0 0 0-1.5H12V9.35a0.250.25 0 0 0-0.43-0.18l-2.9 2.9a0.250.25 0 0 0 0 0.35ZM11.28 6.78a0.750.75 0 1 0-1.06-1.06L7.25 8.69 5.78 7.22a0.750.75 0 1 0-1.06 1.06l2 2a0.750.75 0 0 0 1.06 0l3.5-3.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
