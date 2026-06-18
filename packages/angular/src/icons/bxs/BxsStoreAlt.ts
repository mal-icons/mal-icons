import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-store-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsStoreAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2H5C3.35 2 2 3.35 2 5v2.83c0 1.050.38 2.01 1 2.75V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.42c0.62-0.73 1-1.69 1-2.75V5c0-1.65-1.35-3-3-3zm1 3v2.83c0 1.14-0.85 2.11-1.89 2.17L18 10c-1.1 0-2-0.9-2-2V4h3c0.55 0 1 0.45 1 1zM10 8V4h4v4c0 1.1-0.9 2-2 2s-2-0.9-2-2zM4 5c0-0.550.45-1 1-1h3v4c0 1.1-0.9 2-2 2l-0.110C4.85 9.94 4 8.97 4 7.83V5zm6 11H6v-3h4v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsStoreAlt;
