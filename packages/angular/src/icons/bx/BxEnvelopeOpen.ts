import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-envelope-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxEnvelopeOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.56 8.17-9-6a1 1 0 0 0-1.11 0l-9 6A1 1 0 0 0 2 9v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-0.33-0.17-0.65-0.44-0.83zM12 4.2 19.2 9 12 13.8 4.8 9 12 4.2zM4 20v-9.13l7.45 4.96a1 1 0 0 0 1.11 0L20 10.87 20 20H4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxEnvelopeOpen;
