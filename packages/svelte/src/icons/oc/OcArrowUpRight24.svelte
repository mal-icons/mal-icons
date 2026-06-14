<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.25 15.5a0.750.75 0 0 1-0.75-0.75V7.56L7.28 17.78a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L16.44 6.5H9.25a0.750.75 0 0 1 0-1.5h9a0.750.75 0 0 1 0.750.75v9a0.750.75 0 0 1-0.750.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
