<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M186-160v-466L47-800h833v640H186Zm60-580v520h574v-520H246Zm284 471 43-43-63-61h206v-60H364l166 164ZM364-527h352L550-690l-43 42 63 61H364v60ZM246-740v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
