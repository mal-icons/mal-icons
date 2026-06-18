import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-user-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsUserX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 12.05c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5-3.5 1.51-3.5 3.5 1.51 3.5 3.5 3.5zM9 13H7c-2.76 0-5 2.24-5 5v1h12v-1c0-2.76-2.24-5-5-5zm11.29-4.71L18 10.59l-2.29-2.29-1.41 1.41 2.29 2.29-2.29 2.29 1.41 1.41 2.29-2.29 2.29 2.29 1.41-1.41L19.41 12l2.29-2.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsUserX;
