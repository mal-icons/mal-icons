<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M224-408h301q12.75 0 21.38-8.62T555-438v-218q0-12.75-8.62-21.37T525-686H224q-12.75 0-21.37 8.63T194-656v218q0 12.75 8.63 21.38T224-408Zm-84 248q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
