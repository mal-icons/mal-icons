<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M130-780v-60h700v60H130Zm350 486L334-440l42-42 74 73v-261h60v261l74-73 42 42-146 146ZM130-120v-60h700v60H130Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
