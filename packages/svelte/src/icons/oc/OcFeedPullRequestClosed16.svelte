<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.5 12.25A1.75 1.75 0 0 0 6 8.82V6.93A1.75 1.75 0 0 0 5.5 3.5 1.75 1.75 0 0 0 5 6.93v1.89a1.75 1.75 0 0 0 0.5 3.43Zm5-5a0.50.5 0 0 0-0.50.5v1.07a1.75 1.75 0 0 0 0.5 3.43 1.75 1.75 0 0 0 0.5-3.43V7.75a0.50.5 0 0 0-0.5-0.5Zm1.25-2.76a0.50.5 0 0 0-0.71-0.71l-0.530.53-0.53-0.53a0.50.5 0 0 0-0.710.71l0.530.53-0.530.53a0.50.5 0 0 0 0.710.71l0.53-0.530.530.53a0.50.5 0 0 0 0.71-0.71l-0.53-0.53Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
