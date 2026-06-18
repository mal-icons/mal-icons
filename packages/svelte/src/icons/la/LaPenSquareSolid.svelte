<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.13 8.88 C 19.36 8.88 18.58 9.17 18 9.75 L 9.74 18.02 L 9.71 18.33 L 9.24 21.64 L 9.02 22.99 L 10.36 22.77 L 13.67 22.3 L 13.99 22.27 L 22.25 14 C 23.41 12.84 23.41 10.91 22.25 9.75 C 21.67 9.17 20.9 8.88 20.13 8.88 z M 20.13 10.88 C 20.38 10.88 20.65 10.96 20.85 11.16 C 21.23 11.55 21.24 12.14 20.88 12.53 L 20.85 12.56 L 13.05 20.39 L 11.39 20.61 L 11.61 18.96 L 19.44 11.16 C 19.64 10.96 19.87 10.88 20.13 10.88 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
