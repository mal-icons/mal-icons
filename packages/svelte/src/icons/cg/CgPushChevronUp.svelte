<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 16.93L6.41 18.34L12.07 12.69L17.73 18.34L19.14 16.93L12.07 9.86L5 16.93Z","fill":"currentColor"}],["path",{"d":"M19 8H5V6H19V8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
