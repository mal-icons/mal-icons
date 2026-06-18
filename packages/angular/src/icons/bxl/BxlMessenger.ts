import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-messenger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlMessenger {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3c-4.92 0-8.91 3.73-8.91 8.33 0 2.62 1.29 4.95 3.31 6.48V21l3.04-1.69c0.810.23 1.670.35 2.560.35 4.92 0 8.91-3.73 8.91-8.33C20.91 6.73 16.92 3 12 3zm0.94 11.17-2.31-2.39-4.44 2.45 4.87-5.16 2.31 2.4 4.44-2.45-4.87 5.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlMessenger;
