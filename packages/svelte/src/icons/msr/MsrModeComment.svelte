<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-240q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v668q0 19.69-18.5 27.34Q843-117 829-131L720-240H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
