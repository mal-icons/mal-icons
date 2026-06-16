import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-handshake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsHandshake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.59 5.95-7.05 7.04L0.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42-5.19-5.17zm12.65 4.29-8.49-8.49-2.06 2.06 5.9 5.88-2.83 2.83-5.17-5.17-6.27 6.27 1.42 1.41 5.32-5.320.710.71-5.32 5.32 1.42 1.41 5.32-5.320.710.71-5.32 5.32 1.41 1.41 5.32-5.320.710.71L10.68 20l1.41 1.41 11.15-11.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsHandshake;
