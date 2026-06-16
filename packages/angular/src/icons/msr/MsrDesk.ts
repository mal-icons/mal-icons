import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-desk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDesk {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-270v-420q0-12.75 8.63-21.37T110-720h740q12.75 0 21.38 8.63T880-690v420q0 12.75-8.62 21.38T850-240q-6 0-11.48-2.29t-9.5-6.5Q825-253 822.5-258.54 820-264.09 820-270v-70H630v70q0 5.88-2.29 11.4-2.29 5.52-6.5 9.56Q617-245 611.38-242.5q-5.62 2.5-11.62 2.5-12.75 0-21.25-8.62T570-270v-390H140v390q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Q97-240 88.5-248.62T80-270Zm550-290h190v-100H630v100Zm0 160h190v-100H630v100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDesk;
