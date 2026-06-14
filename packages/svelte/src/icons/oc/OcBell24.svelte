<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1c3.68 0 7 2.57 7 6v4.54c0 0.640.19 1.270.55 1.8l2.2 3.3A1.52 1.52 0 0 1 20.48 19H15.5a3.5 3.5 0 1 1-7 0H3.52a1.52 1.52 0 0 1-1.26-2.36l2.2-3.3A3.25 3.25 0 0 0 5 11.54V7c0-3.43 3.32-6 7-6ZM6.5 7v4.54a4.75 4.75 0 0 1-0.8 2.64l-2.2 3.300.0100.0100.010.0100.010h16.96l0.0100.0100-0.010-0.01a0.020.02 0 0 00-0.01l-2.2-3.3a4.75 4.75 0 0 1-0.8-2.63V7c0-2.36-2.38-4.5-5.5-4.5S6.5 4.64 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
