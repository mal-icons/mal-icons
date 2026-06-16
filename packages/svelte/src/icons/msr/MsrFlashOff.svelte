<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m632-414-43-43 57-83H520l81-280H340v114l-60-60v-54q0-24.75 17.63-42.37T340-880h278q23 0 38 18.5t8 41.5l-64 220h74q26.87 0 39.94 24Q727-552 711-529l-79 115ZM813-61 561-313 441-139q-5 7-11.5 8.5t-13.4-0.66q-6.9-2.16-11.5-7.55T400-152v-248h-60q-24.75 0-42.37-17.62T280-460v-134L61-813l43-43 752 752-43 43ZM465-582Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
