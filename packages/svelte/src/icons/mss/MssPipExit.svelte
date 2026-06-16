<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-360h60v300h680v-520H440v-60h440v640H80Zm617-140 43-43-151-150h118v-60H487v220h60v-117l150 150ZM80-580v-220h300v220H80Zm400 100Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
