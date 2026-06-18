<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.55 17.45v3.27C6.55 22.53 5.08 24 3.27 24S0 22.53 0 20.73c0-1.81 1.47-3.27 3.27-3.27Zm8.73-8.73V12c0 1.81-1.47 3.27-3.27 3.27H5.45c-1.81 0-3.27-1.47-3.27-3.27 0-1.81 1.47-3.27 3.27-3.27zM24 0v3.27c0 1.81-1.47 3.27-3.27 3.27H7.64c-1.81 0-3.27-1.47-3.27-3.27S5.83 0 7.64 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
