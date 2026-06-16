<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M372-320h60v-132h132v-60H432v-132h-60v132H240v60h132v132ZM80-160v-640h640v275l160-160v410L720-435v275H80Zm60-60h520v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
