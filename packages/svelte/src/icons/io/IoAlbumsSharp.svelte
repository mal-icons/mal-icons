<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"128","y":"64","width":"256","height":"32"}],["rect",{"x":"96","y":"112","width":"320","height":"32"}],["path",{"d":"M464,448H48V160H464Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
