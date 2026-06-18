<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 7C10 10.87 13.13 14 17 14C18.96 14 20.73 13.2 22 11.9C22 11.93 22 11.97 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C12.03 2 12.07 2 12.1 2C10.8 3.27 10 5.04 10 7ZM4 12C4 16.42 7.58 20 12 20C15.06 20 17.72 18.28 19.06 15.76C18.39 15.92 17.7 16 17 16C12.03 16 8 11.97 8 7C8 6.3 8.08 5.61 8.24 4.94C5.72 6.28 4 8.94 4 12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
