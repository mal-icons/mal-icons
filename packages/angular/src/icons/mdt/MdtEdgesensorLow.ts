import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-edgesensor-low",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEdgesensorLow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h8v1H8zm0 15h8v1H8z","opacity":".3"}],["path",{"d":"M20 10h2v7h-2zM2 7h2v7H2zm14-4.99L8 2c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zm0-12H8V4h8v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEdgesensorLow;
