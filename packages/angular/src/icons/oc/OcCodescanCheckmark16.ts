import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-codescan-checkmark-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCodescanCheckmark16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.28 6.28a0.750.75 0 1 0-1.06-1.06L6.25 8.19l-0.97-0.97a0.750.75 0 0 0-1.06 1.06l1.5 1.5a0.750.75 0 0 0 1.06 0l3.5-3.5Z"}],["path",{"d":"M7.5 15a7.5 7.5 0 1 1 5.81-2.75l2.47 2.47a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21l-2.47-2.47A7.47 7.47 0 0 1 7.5 15Zm0-13.5a6 6 0 1 0 4.09 10.390.750.75 0 0 1 0.29-0.29 6 6 0 0 0 1.12-6.49A6 6 0 0 0 7.5 1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCodescanCheckmark16;
