<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M385-226H160v-470h60v410h105v-410h225v410h105v-410h190l-57-57 42-43 130 130-130 129-42-43 58-56H715v410H490v-410H385v410ZM40-96v-395h880v395H40Zm60-60h760v-275H100v275Zm760-275H100h760Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
