<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-510v-330h720v330H120Zm0 390v-330h720v330H120Zm60-60h600v-210H180v210Zm0-210v210-210Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
