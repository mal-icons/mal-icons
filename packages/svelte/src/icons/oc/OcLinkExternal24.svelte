<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.5 2.25a0.750.75 0 0 1 0.75-0.75h5.5a0.750.75 0 0 1 0.750.75v5.5a0.750.75 0 0 1-1.5 0V4.06l-6.22 6.22a0.750.75 0 1 1-1.06-1.06L19.94 3h-3.69a0.750.75 0 0 1-0.75-0.75Z"}],["path",{"d":"M2.5 4.25c0-0.970.78-1.75 1.75-1.75h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.250.25 0 0 0-0.250.25v15.5c0 0.140.110.250.250.25h15.5a0.250.25 0 0 0 0.25-0.25v-8.5a0.750.75 0 0 1 1.5 0v8.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V4.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
