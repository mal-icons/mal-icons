<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 12C22 17.52 17.52 22 12 22H6.66C8.68 20.55 10 18.18 10 15.5H12C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12V15.5C8.5 19.09 5.59 22 2 22V12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
