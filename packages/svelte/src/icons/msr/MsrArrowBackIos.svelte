<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M372-108 21-459q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T428-795L113-480l315 315q12 12 11.5 28.5T428-109q-12 12-28.5 12T372-108Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
