<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-0.53-0.21-1.04-0.59-1.41l-5-5h2.25z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
