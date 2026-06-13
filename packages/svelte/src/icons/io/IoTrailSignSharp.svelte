<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M502.63,336l-80-80H278V224H448V64H278V32H234V64H89.37l-80,80,80,80H234v32H64V416H234v64h44V416H422.63Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
