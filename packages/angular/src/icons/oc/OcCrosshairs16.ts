import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-crosshairs-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCrosshairs16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"}],["path",{"d":"M5 7.25a0.750.75 0 0 1 0 1.5H1a0.750.75 0 0 1 0-1.5Zm3-7a0.750.75 0 0 1 0.750.75v4a0.750.75 0 0 1-1.5 0V1A0.750.75 0 0 1 8 0.25Zm7 7a0.750.75 0 0 1 0 1.5h-4a0.750.75 0 0 1 0-1.5Zm-7 3a0.750.75 0 0 1 0.750.75v4a0.750.75 0 0 1-1.5 0v-4a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCrosshairs16;
