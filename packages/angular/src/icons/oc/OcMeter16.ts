import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-meter-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMeter16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1.5a6.5 6.5 0 1 0 6.02 4.040.750.75 0 0 1 1.39-0.57 8 8 0 1 1-4.37-4.370.750.75 0 1 1-0.57 1.39A6.47 6.47 0 0 0 8 1.5Zm6.280.22a0.750.75 0 0 1 0 1.06l-4.06 4.06a2.5 2.5 0 1 1-1.06-1.06L13.22 1.72a0.750.75 0 0 1 1.06 0ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMeter16;
