<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 12.1 5 C 10.24 5.02 7.38 6.95 5.04 9.96 C 2.16 13.65 1.15 17.56 2.78 18.7 C 4.42 19.82 8.08 17.73 10.96 14.04 C 13.84 10.34 14.85 6.43 13.22 5.31 C 12.91 5.1 12.53 5 12.1 5 z M 29.98 11 C 26.18 17.36 20.09 20.54 16.36 18.27 C 15.08 17.48 14.29 15.82 13.99 14 C 12.02 17.66 8.21 20.9 4 22 C 6.68 25.19 10.84 27 15.31 27 C 23.4 27 29.96 20.38 29.96 12.2 C 29.97 11.74 30.03 11.44 29.98 11 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
