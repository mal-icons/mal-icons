<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-132q-6 0-11-2t-10-7L21-579q-9-9-8.5-21t9.5-20q96-85 212-132.5T480-800q130 0 246 47.5T938-620q9 8 9.5 20t-8.5 21L501-141q-5 5-10 7t-11 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
