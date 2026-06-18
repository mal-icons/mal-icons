import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-volume-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsVolumeFull {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 21c3.53-1.55 6-4.91 6-9S19.53 4.55 16 3v2c2.39 1.39 4 4.05 4 7S18.39 17.61 16 19v2z"}],["path",{"d":"M16 7v10c1.23-1.1 2-3.23 2-5s-0.77-3.9-2-5zM4 17h2.7L14 21.87V2.13L6.7 7H4c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsVolumeFull;
