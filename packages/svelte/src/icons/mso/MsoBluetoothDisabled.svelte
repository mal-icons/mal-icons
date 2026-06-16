<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M806-56 624-238 480-94h-30v-314L256-214l-42-42 196-196L56-806l42-42L848-98l-42 42ZM510-210l70-70-70-70v140Zm26-284-42-43 116-115-100-98v229l-60-60v-285h30l214 214-158 158Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
