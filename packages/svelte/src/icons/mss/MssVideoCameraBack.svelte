<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h640v275l160-160v410L720-435v275H80Zm60-60h520v-520H140v520Zm65-113h400L476-508 370-368l-71-90-94 125Zm-65 113v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
