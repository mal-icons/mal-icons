<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m120-200 180-280-180-280h521l199 280-199 280H120Zm110-60h380l156-220-156-220H230l142 220-142 220Zm142-220L230-700l142 220-142 220 142-220Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
