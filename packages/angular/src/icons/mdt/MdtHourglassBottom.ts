import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-hourglass-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtHourglassBottom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16 16.5-4-4-4 4V20h8z","opacity":".3"}],["path",{"d":"m16 16.5-4-4-4 4V20h8z","opacity":".3"}],["path",{"d":"M6 22h12v-6l-4-4 3.99-4.01L18 2H6l0.01 5.99L10 12l-4 3.99V22zM8 7.5V4h8v3.5l-4 4-4-4zm0 9 4-4 4 4V20H8v-3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtHourglassBottom;
