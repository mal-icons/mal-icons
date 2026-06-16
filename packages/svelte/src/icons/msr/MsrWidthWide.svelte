<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-160q-24.75 0-42.37-17.62T80-220v-520q0-24.75 17.63-42.37T140-800h680q24.75 0 42.38 17.63T880-740v520q0 24.75-17.62 42.38T820-160H140Zm0-60h110v-520H140v520Zm170 0h340v-520H310v520Zm400 0h110v-520H710v520ZM310-740v520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
