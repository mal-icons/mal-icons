<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 17H20V10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10V17H2V19H22V17ZM15 23V21H9V23H15ZM9 9V7H15V9.41L11.41 13H15V15H9V12.59L12.59 9H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
