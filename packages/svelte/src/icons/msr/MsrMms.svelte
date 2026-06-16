<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M292-390h400q9 0 13.5-8t-1.5-16L592-561q-5-6-12-6t-12 6L454-410l-80-98q-5-6-12-6t-12 6l-70 94q-5 8-0.75 16t12.75 8Zm-52 150L131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240Zm-100-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
