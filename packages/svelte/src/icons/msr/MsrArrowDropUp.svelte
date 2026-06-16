<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M353-400q-20 0-27.5-18.5T332-451l128-129q5-5 10-6.5t11-1.5q6 0 11 1.5t10 6.5l128 129q14 14 6.5 32.5T609-400H353Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
