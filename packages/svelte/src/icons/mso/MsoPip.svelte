<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-520v-60h178L57-780l43-43 200 200v-177h60v280H80Zm60 360q-24 0-42-18t-18-42v-230h60v230h340v60H140Zm680-280v-300H430v-60h390q24 0 42 18t18 42v300h-60ZM540-160v-220h340v220H540Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
