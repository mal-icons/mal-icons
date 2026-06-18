import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-dice-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsDice6 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM8 17.5a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 8 17.5zm0-4a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 8 13.5zm0-4a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 8 9.5zm8 8a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 16 17.5zm0-4a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 16 13.5zm0-4a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 16 9.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsDice6;
