import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsbFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 5a0.50.5 0 0 0-0.50.5v5a0.50.5 0 0 0 0.50.5h15a0.50.5 0 0 0 0.5-0.5v-5a0.50.5 0 0 0-0.5-0.5zm1.75 1.5h11.5a0.250.25 0 0 1 0.250.25v1a0.250.25 0 0 1-0.250.25H2.25A0.250.25 0 0 1 2 7.75v-1a0.250.25 0 0 1 0.25-0.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsbFill;
