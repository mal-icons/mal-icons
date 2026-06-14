import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-device-mobile-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDeviceMobile16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 0h8.5C13.22 0 14 0.78 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 0.78 2.78 0 3.75 0ZM3.5 1.75v12.5c0 0.140.110.250.250.25h8.5a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25h-8.5a0.250.25 0 0 0-0.250.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDeviceMobile16;
