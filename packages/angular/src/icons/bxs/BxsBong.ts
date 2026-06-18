import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-bong",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBong {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.29 8.29-2.07 2.07A7.02 7.02 0 0 0 15 8.68V4h1V2H8v2h1v4.68A7.01 7.01 0 0 0 5 15c0 3.86 3.14 7 7 7s7-3.14 7-7a6.96 6.96 0 0 0-0.65-2.93l2.36-2.36-1.41-1.41zm-8.96 20.67-0.23V4h2v6.06l0.670.24A5.01 5.01 0 0 1 16.89 14H7.11a5.01 5.01 0 0 1 3.22-3.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBong;
