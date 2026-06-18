import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-hash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxHash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.02 3.82 15.23 8h-4.97l0.72-3.81-1.96-0.37L8.23 8H4v2h3.86l-0.75 4H3v2h3.73l-0.71 3.81 1.970.37L8.77 16h4.97l-0.71 3.81 1.970.370.78-4.17H20v-2h-3.86l0.75-4H21V8h-3.73l0.72-3.81-1.96-0.37zM14.11 14H9.14l0.75-4h4.97l-0.75 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxHash;
