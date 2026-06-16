<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 17.17V12h-5.17L20 17.17zM10.83 8H20V6H8.83l2 2zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z","opacity":".3"}],["path",{"d":"M6.83 4H20c1.11 0 2 0.89 2 2v12c0 0.34-0.080.66-0.230.94L20 17.17V12h-5.17l-4-4H20V6H8.83l-2-2zm13.66 19.31L17.17 20H4c-1.11 0-2-0.89-2-2l0.01-12c0-0.340.08-0.660.23-0.93L0.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM4 6.83V8h1.17L4 6.83zM15.17 18l-6-6H4v6h11.17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
