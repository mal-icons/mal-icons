<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m282-198-84-84q-9-9-9-21.5t9-21.5l437-437q9-9 21.5-9t21.5 9l84 85q8 9 8.5 21t-8.5 21L325-198q-9 9-21.5 9t-21.5-9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
