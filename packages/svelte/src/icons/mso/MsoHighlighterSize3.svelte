<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M310-170 169-311q-9-9-9-21t9-21l437-438q9-9 21.5-9t21.5 9l141 142q9 9 9 21t-9 21L353-170q-9 9-21.5 9t-21.5-9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
