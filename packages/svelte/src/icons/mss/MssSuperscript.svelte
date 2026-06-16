<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M770-600v-115h120v-55H770v-30h150v115H800v55h120v30H770ZM235-160l185-291-172-269h86l135 213 135-213h86L518-451l185 291h-85L469-394 320-160h-85Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
