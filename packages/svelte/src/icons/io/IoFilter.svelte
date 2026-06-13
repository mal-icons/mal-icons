<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z"}],["path",{"d":"M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z"}],["path",{"d":"M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
