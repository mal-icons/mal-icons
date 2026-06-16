<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25zm-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92zm-6-7.74V12h-4V4.26c0.64-0.16 1.31-0.26 2-0.26s1.360.1 2 0.26zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
