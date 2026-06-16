<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170H80Zm381 410H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29Zm19-320ZM679.89-90Q601-90 545.5-145.61t-55.5-134.5Q490-359 545.61-414.5t134.5-55.5Q759-470 814.5-414.39t55.5 134.5Q870-201 814.39-145.5T679.89-90ZM688-260l91-91-28-28-91 91 28 28ZM80-450v-60h137l63 123 160-320 106 215q-13 8-25 18.5T498-452l-59-120-160 320-98-198H80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
