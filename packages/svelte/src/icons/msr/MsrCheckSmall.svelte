<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m400-402 250-250q9-9 21-9t21 9q9 9 9 21t-9 21L421-339q-9 9-21 9t-21-9L268-450q-9-9-9-21t9-21q9-9 21-9t21 9l90 90Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
