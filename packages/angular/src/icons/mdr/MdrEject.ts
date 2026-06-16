import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-eject",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEject {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 17h12c0.55 0 1 0.45 1 1s-0.45 1-1 1H6c-0.55 0-1-0.45-1-1s0.45-1 1-1zm5.17-10.75-4.8 7.2c-0.450.660.03 1.550.83 1.55h9.6c0.8 0 1.28-0.890.83-1.55l-4.8-7.2a0.990.99 0 0 0-1.66 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEject;
