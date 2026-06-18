<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 7 C 18.8 7 21 9.2 21 12 C 21 13.3 20.5 14.4 19.7 15.3 C 21.6 16 23 17.8 23 20 C 23 22.8 20.8 25 18 25 L 7 25 L 7 7 L 16 7 M 9 15 L 16 15 C 17.7 15 19 13.7 19 12 C 19 10.3 17.7 9 16 9 L 9 9 L 9 15 M 9 23 L 18 23 C 19.7 23 21 21.7 21 20 C 21 18.3 19.7 17 18 17 L 9 17 L 9 23 M 16 5 L 5 5 L 5 27 L 18 27 C 21.9 27 25 23.9 25 20 C 25 17.9 24 15.9 22.5 14.6 C 22.8 13.8 23 12.9 23 12 C 23 8.1 19.9 5 16 5 Z M 11 11 L 16 11 C 16.6 11 17 11.4 17 12 C 17 12.6 16.6 13 16 13 L 11 13 Z M 11 19 L 18 19 C 18.6 19 19 19.4 19 20 C 19 20.6 18.6 21 18 21 L 11 21 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
