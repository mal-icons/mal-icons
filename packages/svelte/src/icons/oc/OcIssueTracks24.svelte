<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.5 12a9.5 9.5 0 1 1 19 0 0.750.75 0 0 0 1.5 0c0-6.07-4.92-11-11-11S1 5.93 1 12s4.93 11 11 11a0.750.75 0 0 0 0-1.5A9.5 9.5 0 0 1 2.5 12Z"}],["path",{"d":"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2.5 2.75a0.750.75 0 0 1 0.75-0.75h7a0.750.75 0 0 1 0 1.5h-7a0.750.75 0 0 1-0.75-0.75Zm3.75 2.75a0.750.75 0 0 0 0 1.5h4a0.750.75 0 0 0 0-1.5h-4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
