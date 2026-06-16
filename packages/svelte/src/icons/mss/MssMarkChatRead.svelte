<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M701-160 567-294l42-42 92 91 177-177 42 43-219 219ZM80-80v-800h800v370h-60v-310H140v520h350v60H240L80-80Zm60-220v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
