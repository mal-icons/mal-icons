import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-crosshairs-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCrosshairs24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9Zm-1.5 0a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z"}],["path",{"d":"M12 0.25a0.750.75 0 0 1 0.750.75v5a0.750.75 0 0 1-1.5 0V1A0.750.75 0 0 1 12 0.25Zm-6 11a0.750.75 0 0 1 0 1.5H1a0.750.75 0 0 1 0-1.5Zm17 0a0.750.75 0 0 1 0 1.5h-5a0.750.75 0 0 1 0-1.5Zm-11 6a0.750.75 0 0 1 0.750.75v5a0.750.75 0 0 1-1.5 0v-5a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCrosshairs24;
