<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M300-480 179-668q-20-30-2-61t53-31h367.9Q620-760 638-748.5q18 11.5 31 28.5l146 205q11 15.97 11 34.99Q826-461 815-445L669-240q-13 17-31 28.5T597.9-200H230q-35 0-53-31t2-61l121-188Zm72 0L230-260h380l156-220-156-220H230l142 220Zm0 0L230-700l142 220-142 220 142-220Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
