import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-briefcase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBriefcase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 6h-3V4c0-1.1-0.9-2-2-2H9c-1.1 0-2 0.9-2 2v2H4c-1.1 0-2 0.9-2 2v3h20V8c0-1.1-0.9-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-7h-8v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBriefcase;
