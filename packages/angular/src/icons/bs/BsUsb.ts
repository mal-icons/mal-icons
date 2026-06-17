import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsb {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.25 7a0.250.25 0 0 0-0.250.25v1c0 0.140.110.250.250.25h11.5a0.250.25 0 0 0 0.25-0.25v-1a0.250.25 0 0 0-0.25-0.25z"}],["path",{"d":"M0 5.5A0.50.5 0 0 1 0.5 5h15a0.50.5 0 0 1 0.50.5v5a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zM1 10h14V6H1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsb;
