<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h800v640H80Zm60-60h310v-520H140v520Zm370 0h310v-520H510v520Zm44-356h223v-50H554v50Zm0 109h223v-50H554v50Zm0 109h223v-50H554v50ZM140-740v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
