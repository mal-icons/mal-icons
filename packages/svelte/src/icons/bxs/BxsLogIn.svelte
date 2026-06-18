<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.5 2h-13a0.50.5 0 0 0-0.50.5V11h6V8l5 4-5 4v-3H5v8.5a0.50.5 0 0 0 0.50.5h13a0.50.5 0 0 0 0.5-0.5v-19a0.50.5 0 0 0-0.5-0.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
