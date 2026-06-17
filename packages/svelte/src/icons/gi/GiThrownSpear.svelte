<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M248.25 16.69C124.17 17.31-57.31 93.19 51.22 374.56 12.85 60.82 305.09 126.85 394.47 336.47l-76.56-281-2.56-9.47 9.44-2.66 17.94-5.06c-14.34-12.72-50.85-21.81-94.47-21.59zm112.69 37.03l-21.34 6.03L422 362.25l-29.62 4.81 94.06 127.72 7.53-144.19-22.16 3.59-110.87-300.47z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
