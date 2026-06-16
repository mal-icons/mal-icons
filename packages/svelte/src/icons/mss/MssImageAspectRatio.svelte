<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M241-499h60v-60h-60v60Zm170 0h60v-60h-60v60Zm168 175h60v-60h-60v60Zm0-175h60v-60h-60v60ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
