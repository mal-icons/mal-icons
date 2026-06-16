<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M398-125h164v-40H398v40ZM120-40v-880h720v880H120Zm60-210h600v-520H180v520Zm0 150h600v-90H180v90Zm0-730h600v-30H180v30Zm0 0v-30 30Zm0 730v-90 90Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
