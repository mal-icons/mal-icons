<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M285-240v-480h60v480h-60ZM450-80v-800h60v800h-60ZM120-400v-160h60v160h-60Zm495 160v-480h60v480h-60Zm165-160v-160h60v160h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
