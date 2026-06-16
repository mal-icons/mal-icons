<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-160v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60-454v-148h720v148H120Zm60-38h72v-72h-72v72Zm-60 284v-148h720v148H120Zm60-38h72v-72h-72v72Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
