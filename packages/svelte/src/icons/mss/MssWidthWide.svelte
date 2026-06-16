<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h800v640H80Zm60-60h110v-520H140v520Zm170 0h340v-520H310v520Zm400 0h110v-520H710v520ZM310-740v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
