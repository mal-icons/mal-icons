import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-dollar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDollar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 19V22H13V19H14C16.21 19 18 17.21 18 15C18 12.79 16.21 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79 5 6 6.79 6 9C6 11.21 7.79 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1 17 16 16.1 16 15C16 13.9 15.1 13 14 13H13V17ZM11 11V7H10C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11H11Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDollar;
