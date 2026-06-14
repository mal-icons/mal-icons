<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.75 0a0.750.75 0 0 1 0.750.75V3h3.63c0.41 0 0.810.15 1.130.41l2.07 1.75a1.75 1.75 0 0 1 0 2.67l-2.07 1.75a1.75 1.75 0 0 1-1.130.41H8.5v5.25a0.750.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.78 1.78 3 2.75 3H7V0.75A0.750.75 0 0 1 7.75 0Zm4.38 8.5a0.250.25 0 0 0 0.16-0.06l2.07-1.75a0.250.25 0 0 0 0-0.38l-2.07-1.75a0.250.25 0 0 0-0.16-0.06H2.75a0.250.25 0 0 0-0.250.25v3.5c0 0.140.110.250.250.25h9.38Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
