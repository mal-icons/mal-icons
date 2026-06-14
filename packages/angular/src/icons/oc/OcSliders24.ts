import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sliders-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSliders24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 18.25a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1-0.75-0.75Zm-8-12a0.750.75 0 0 1 0.75-0.75h7.5a0.750.75 0 0 1 0 1.5h-7.5A0.750.75 0 0 1 3 6.25Zm13 6a0.750.75 0 0 1 0.75-0.75h3.5a0.750.75 0 0 1 0 1.5h-3.5a0.750.75 0 0 1-0.75-0.75ZM8.75 16a0.750.75 0 0 1 0.750.75v3a0.750.75 0 0 1-1.5 0v-3a0.750.75 0 0 1 0.75-0.75Z"}],["path",{"d":"M3 18.25a0.750.75 0 0 1 0.75-0.75h4.5a0.750.75 0 0 1 0 1.5h-4.5a0.750.75 0 0 1-0.75-0.75Zm0-6a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1-0.75-0.75ZM16.75 10a0.750.75 0 0 1 0.750.75v3a0.750.75 0 0 1-1.5 0v-3a0.750.75 0 0 1 0.75-0.75ZM14 6.25a0.750.75 0 0 1 0.75-0.75h5.5a0.750.75 0 0 1 0 1.5h-5.5a0.750.75 0 0 1-0.75-0.75ZM11.25 4a0.750.75 0 0 1 0.750.75v3a0.750.75 0 0 1-1.5 0v-3a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSliders24;
