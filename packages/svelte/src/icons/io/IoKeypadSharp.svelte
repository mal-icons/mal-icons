<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"80","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"80","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"80","y":"272","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"272","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"400","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"272","width":"96","height":"96","rx":"8","ry":"8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
