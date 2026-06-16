import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-attach-email",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdAttachEmail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3 6 8 5 8-5v3h2V4c0-1.1-0.9-2-2-2H3c-1.1 0-1.990.9-1.99 2L1 16c0 1.10.9 2 2 2h10v-2H3V6zm16-2-8 5-8-5h16z"}],["path",{"d":"M21 14v4c0 1.1-0.9 2-2 2s-2-0.9-2-2v-4.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdAttachEmail;
