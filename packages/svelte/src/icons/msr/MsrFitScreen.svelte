<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M820-610v-130H690v-60h130q24 0 42 18t18 42v130h-60Zm-740 0v-130q0-24 18-42t42-18h130v60H140v130H80Zm610 450v-60h130v-130h60v130q0 24-18 42t-42 18H690Zm-550 0q-24 0-42-18t-18-42v-130h60v130h130v60H140Zm560-120H260q-24.75 0-42.37-17.62T200-340v-280q0-24.75 17.63-42.37T260-680h440q24.75 0 42.38 17.63T760-620v280q0 24.75-17.62 42.38T700-280Zm-440-60h440v-280H260v280Zm0 0v-280 280Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
