<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M800-80H381L127-403l52-57 141 75v-395h60v495l-144-77 175 222h329v-320H460v-60h340v440ZM203-665q-11.07-18.75-17.04-40.49Q180-727.23 180-750.25 180-821 229.73-870.5T350-920q70.55 0 120.28 49.74Q520-820.52 520-749.96q0 22.96-5.96 44.61Q508.07-683.68 497-665l-52-30q7-12 11-26t4-29.48Q460-796 427.88-828q-32.12-32-78-32Q304-860 272-827.92 240-795.83 240-750q0 15 4 29t11 26l-52 30Zm372 365Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
