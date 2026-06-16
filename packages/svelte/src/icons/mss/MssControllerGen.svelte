<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480.5-250q95.5 0 162.5-67.5t67-163q0-95.5-67.08-162.5Q575.83-710 480-710q-95 0-162.5 67.08Q250-575.83 250-480q0 95 67.5 162.5t163 67.5Zm0-60Q410-310 360-359.94 310-409.87 310-480q0-71 49.94-120.5Q409.88-650 480-650q71 0 120.5 49.5t49.5 120q0 70.5-49.5 120.5t-120 50Zm-0.5-128 98-98-42-42-98 98 42 42ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0-600v600-600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
