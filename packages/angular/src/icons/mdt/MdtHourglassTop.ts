import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-hourglass-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtHourglassTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 7.5 4 4 4-4V4H8z","opacity":".3"}],["path",{"d":"m8 7.5 4 4 4-4V4H8z","opacity":".3"}],["path",{"d":"M18 2H6v6l4 4-3.99 4.01L6 22h12l-0.01-5.99L14 12l4-3.99V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtHourglassTop;
