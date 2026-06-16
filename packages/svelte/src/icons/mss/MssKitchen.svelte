<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M309-650v-118h60v118h-60Zm0 361v-196h60v196h-60ZM160-80v-800h640v800H160Zm60-60h520v-398H220v398Zm0-458h520v-222H220v222Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
