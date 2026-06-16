<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M450-160v-371L330-411l-43-43 193-193 193 193-43 43-120-120v371h-60ZM160-597v-203h640v203h-60v-143H220v143h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
