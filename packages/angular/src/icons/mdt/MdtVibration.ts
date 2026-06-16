import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-vibration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVibration {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5h8v14H8z","opacity":".3"}],["path",{"d":"M19 7h2v10h-2zm3 2h2v6h-2zM0 9h2v6H0zm16.5-6h-9C6.67 3 6 3.67 6 4.5v15c0 0.830.67 1.5 1.5 1.5h9c0.83 0 1.5-0.67 1.5-1.5v-15c0-0.83-0.67-1.5-1.5-1.5zM16 19H8V5h8v14zM3 7h2v10H3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVibration;
