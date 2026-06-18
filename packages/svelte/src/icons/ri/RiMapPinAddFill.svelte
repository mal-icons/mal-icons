<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 17.36L12 23.73L5.64 17.36C2.12 13.85 2.12 8.15 5.64 4.64C9.15 1.12 14.85 1.12 18.36 4.64C21.88 8.15 21.88 13.85 18.36 17.36ZM11 10H8V12H11V15H13V12H16V10H13V7H11V10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
