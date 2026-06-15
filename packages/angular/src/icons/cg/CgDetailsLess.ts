import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-details-less",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDetailsLess {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 9C2.45 9 2 9.45 2 10C2 10.55 2.45 11 3 11H21C21.55 11 22 10.55 22 10C22 9.45 21.55 9 21 9H3Z","fill":"currentColor"}],["path",{"d":"M3 13C2.45 13 2 13.45 2 14C2 14.55 2.45 15 3 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13H3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDetailsLess;
