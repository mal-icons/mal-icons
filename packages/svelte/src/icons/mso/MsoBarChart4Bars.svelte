<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-130v-60h800v60H80Zm40-120v-270h100v270H120Zm206 0v-470h100v470H326Zm207 0v-350h100v350H533Zm207 0v-590h100v590H740Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
