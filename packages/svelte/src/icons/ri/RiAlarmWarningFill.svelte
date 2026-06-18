<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20V14C4 9.58 7.58 6 12 6C16.42 6 20 9.58 20 14V20H21V22H3V20H4ZM6 14H8C8 11.79 9.79 10 12 10V8C8.69 8 6 10.69 6 14ZM11 2H13V5H11V2ZM19.78 4.81L21.19 6.22L19.07 8.34L17.66 6.93L19.78 4.81ZM2.81 6.22L4.22 4.81L6.34 6.93L4.93 8.34L2.81 6.22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
