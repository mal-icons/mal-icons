<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 4H21V11C21 15.97 16.97 20 12 20C7.03 20 3 15.97 3 11V4ZM1 2H23V11C23 17.08 18.08 22 12 22C5.92 22 1 17.08 1 11V2ZM11.29 14.69C11.68 15.08 12.32 15.08 12.71 14.69L16.95 10.45C17.34 10.06 17.34 9.43 16.95 9.04C16.56 8.65 15.93 8.65 15.54 9.04L12 12.57L8.46 9.04C8.07 8.65 7.44 8.65 7.05 9.04C6.66 9.43 6.66 10.06 7.05 10.45L11.29 14.69Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
