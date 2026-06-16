<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l134-134q7-7 16.5-3.46Q880-658.92 880-649v338q0 9.92-9.5 13.46Q861-294 854-301L720-435v215q0 24-18 42t-42 18H140Zm0-60h520v-520H140v520Zm95-113h340q9.21 0 13.1-8Q592-349 587-357l-99-135q-5-6-12-6t-12 6l-94 124-59-75q-5-6-12-5.5t-12 6.5l-64 85q-6 8-1.87 16T235-333Zm-95 113v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
