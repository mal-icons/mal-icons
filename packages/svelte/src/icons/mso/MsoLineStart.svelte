<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M170-390q-37.8 0-63.9-26.14t-26.1-64Q80-518 106.1-544t63.9-26q29.09 0 52.54 17T255-510h625v60H255q-9 26-32.46 43T170-390Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
