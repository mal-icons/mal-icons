<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3H12V12H3L3 3ZM2 3C2 2.45 2.45 2 3 2H12C12.55 2 13 2.45 13 3V12C13 12.55 12.55 13 12 13H3C2.45 13 2 12.55 2 12V3ZM10.35 5.51C10.51 5.28 10.45 4.97 10.22 4.82C9.99 4.66 9.68 4.72 9.53 4.95L6.64 9.15L5.2 7.41C5.02 7.2 4.71 7.17 4.49 7.34C4.28 7.52 4.25 7.83 4.43 8.05L6.29 10.3C6.39 10.42 6.54 10.48 6.7 10.48C6.86 10.47 7 10.39 7.09 10.26L10.35 5.51Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
