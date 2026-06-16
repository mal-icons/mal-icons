<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-160v-280h100v280H120Zm155-240v-160h100v160H275Zm155-200v-160h100v160H430Zm155-80v-120h100v120H585Zm155 520v-640h100v640H740Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
