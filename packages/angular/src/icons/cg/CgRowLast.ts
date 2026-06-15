import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-row-last",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgRowLast {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"opacity":"0.5"}],["path",{"d":"M6 13C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H14C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13H6Z","fill":"currentColor"}],["path",{"d":"M6 9C5.45 9 5 8.55 5 8C5 7.45 5.45 7 6 7H14C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9H6Z","fill":"currentColor"}],["path",{"d":"M5 16C5 16.55 5.45 17 6 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H6C5.45 15 5 15.45 5 16Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgRowLast;
