<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.85 8.11L0.44 9.52L7.51 16.59L13.87 10.23L18.11 14.47L16.37 16.21L23.06 18.01L21.27 11.31L19.53 13.06L13.87 7.4L7.51 13.76L1.85 8.11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
