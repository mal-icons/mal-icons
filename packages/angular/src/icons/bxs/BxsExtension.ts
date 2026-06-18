import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-extension",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsExtension {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 10V7c0-1.1-0.9-2-2-2h-3c0-1.65-1.35-3-3-3S8 3.35 8 5H5c-1.1 0-2 0.9-2 2v4h1a2 2 0 0 1 0 4H3v4c0 1.10.9 2 2 2h4v-1a2 2 0 0 1 4 0v1h4c1.1 0 2-0.9 2-2v-3c1.65 0 3-1.35 3-3s-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsExtension;
