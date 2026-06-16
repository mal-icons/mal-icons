<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-173h173v173H80Zm233 0v-173h567v173H313ZM80-393v-174h173v174H80Zm233 0v-174h567v174H313ZM80-627v-173h173v173H80Zm233 0v-173h567v173H313Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
