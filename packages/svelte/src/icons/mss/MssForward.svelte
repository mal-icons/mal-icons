<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-200v-174q0-79 56-134.5T310-564h416L572-718l42-42 226 226-226 226-42-42 154-154H310q-54 0-92 38t-38 92v174h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
