<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m506-413-56-72q-5-6-12-5.5t-12 6.5l-63 83q-5 8-1.1 16T375-377h331q9.21 0 13.1-8Q723-393 718-401l-97-131q-5-6-12-6t-12 6l-91 119ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-590q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-730v590h590q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q760-97 751.38-88.5T730-80H140Zm120-740v560-560Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
