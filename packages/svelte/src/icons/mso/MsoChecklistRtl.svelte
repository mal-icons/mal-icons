<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-290v-60h360v60H80Zm0-320v-60h360v60H80Zm579 396L517-356l42-42 100 99 179-179 42 43-221 221Zm0-320L517-676l42-42 100 99 179-179 42 43-221 221Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
