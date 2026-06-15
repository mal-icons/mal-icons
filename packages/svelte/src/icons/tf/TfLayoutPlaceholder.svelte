<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0.02 1.01v15h17v-15h-17zM8.14 8.51l-7.12 6.2v-12.41l7.12 6.22zM1.46 2.01h14.14l-7.08 6.17-7.06-6.16zM8.52 8.84l7.07 6.17h-14.15l7.09-6.17zM8.9 8.51l7.12-6.2v12.43l-7.12-6.22z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
