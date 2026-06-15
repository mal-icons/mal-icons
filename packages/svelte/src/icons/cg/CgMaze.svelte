<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.37 9.59L8.78 7L1 14.78L3.59 17.37L11.37 9.59Z","fill":"currentColor"}],["path",{"d":"M15.22 7L23 14.78L20.42 17.35L15.22 12.15L10.02 17.35L7.44 14.78L15.22 7Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
