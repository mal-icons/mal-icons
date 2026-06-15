import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-details-more",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDetailsMore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 8C2 7.45 2.45 7 3 7H21C21.55 7 22 7.45 22 8C22 8.55 21.55 9 21 9H3C2.45 9 2 8.55 2 8Z","fill":"currentColor"}],["path",{"d":"M2 12C2 11.45 2.45 11 3 11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 13 21 13H3C2.45 13 2 12.55 2 12Z","fill":"currentColor"}],["path",{"d":"M3 15C2.45 15 2 15.45 2 16C2 16.55 2.45 17 3 17H15C15.55 17 16 16.55 16 16C16 15.45 15.55 15 15 15H3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDetailsMore;
