<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2.5a5.25 5.25 0 0 0-2.52 9.86 9.01 9.01 0 0 0-6.48 8.370.750.75 0 0 0 0.730.77H20.27a0.750.75 0 0 0 0.73-0.77 9.01 9.01 0 0 0-6.48-8.37A5.25 5.25 0 0 0 12 2.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
