<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M310-80q-12.75 0-21.37-8.62T280-110v-676q0-12.75 8.63-21.37T310-816h90v-34q0-12.75 8.63-21.37T430-880h100q12.75 0 21.38 8.63T560-850v34h90q12.75 0 21.38 8.63T680-786v676q0 12.75-8.62 21.38T650-80H310Zm30-500h280v-176H340v176Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
