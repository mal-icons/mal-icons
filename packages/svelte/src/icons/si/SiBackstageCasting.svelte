<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.2 0v0.06a6 6 0 0 1 0 11.89v0.11a6 6 0 0 1 0 11.89v0.06h12.55V0ZM1.25 0v24H9.54V0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
