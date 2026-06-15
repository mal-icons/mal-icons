<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.95 5.97L15.54 7.38L13 4.85V17.04H11V4.85L8.46 7.38L7.05 5.97L12 1.02L16.95 5.97Z","fill":"currentColor"}],["path",{"d":"M5 20.98V10.98H9V8.98H3V22.98H21V8.98H15V10.98H19V20.98H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
