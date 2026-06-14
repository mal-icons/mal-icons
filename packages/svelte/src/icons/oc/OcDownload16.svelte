<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a0.750.75 0 0 1 1.5 0v2.5c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25v-2.5a0.750.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"}],["path",{"d":"M7.25 7.69V2a0.750.75 0 0 1 1.5 0v5.69l1.97-1.97a0.750.75 0 1 1 1.06 1.06l-3.25 3.25a0.750.75 0 0 1-1.06 0L4.22 6.78a0.750.75 0 1 1 1.06-1.06l1.97 1.97Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
