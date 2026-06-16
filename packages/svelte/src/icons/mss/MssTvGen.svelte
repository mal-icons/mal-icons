<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M170-120v-80H80v-600h800v600h-90v80h-23l-26-80H220l-27 80h-23Zm-30-140h680v-480H140v480Zm340-240Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
