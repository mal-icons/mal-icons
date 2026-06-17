import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb-micro-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsbMicroFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.71 4A1 1 0 0 0 2 4.29L0.29 6A1 1 0 0 0 0 6.71V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.71A1 1 0 0 0 15.71 6L14 4.29A1 1 0 0 0 13.29 4zM4.5 7h7a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsbMicroFill;
