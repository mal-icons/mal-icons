<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.38 3.38v17.25h17.25V3.38H3.38zM0 0h24v24H0V0zm5.25 18.23 9.15-12.45h4.35L9.6 18.23H5.25z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
