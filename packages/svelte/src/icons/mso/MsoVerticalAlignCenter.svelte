<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M450-80v-202l-86 86-44-44 160-160 160 160-44 44-86-86v202h-60ZM160-450v-60h640v60H160Zm320-110L320-720l44-44 86 86v-202h60v202l86-86 44 44-160 160Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
