import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-skull",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSkull {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-80v-170q-36-16-65.5-43T124-355.5Q103-391 91.5-433T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 45-11.5 87T836-355.5Q815-320 785.5-293T720-250v170H240Zm60-60h70v-100h60v100h100v-100h60v100h70v-147q37-11 66.5-33t50.5-52.5q21-30.5 32-68.02 11-37.52 11-79.33 0-134-94-217.08Q632-820 480.04-820t-246 83.09Q140-653.82 140-519.81 140-478 151-440.5t32 68q21 30.5 50.5 52.5t66.5 33v147Zm120-220h120l-60-120-60 120Zm-79.91-100Q369-460 389.5-480.59q20.5-20.59 20.5-49.5Q410-559 389.41-579.5q-20.59-20.5-49.5-20.5Q311-600 290.5-579.41q-20.5 20.59-20.5 49.5Q270-501 290.59-480.5q20.59 20.5 49.5 20.5Zm280 0Q649-460 669.5-480.59q20.5-20.59 20.5-49.5Q690-559 669.41-579.5q-20.59-20.5-49.5-20.5Q591-600 570.5-579.41q-20.5 20.59-20.5 49.5Q550-501 570.59-480.5q20.59 20.5 49.5 20.5ZM480-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSkull;
