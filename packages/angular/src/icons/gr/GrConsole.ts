import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-console",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrConsole {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M16 18a1 1 0 100-2v2zm-8-2a1 1 0 100 2v-2zm0.71-8.71a1 1 0 10-1.41 1.41l1.41-1.41zM11 11l0.710.71a1 1 0 0-1.41L11 11zm-3.71 2.29a1 1 0 101.41 1.41l-1.41-1.41zM7 4h10V2H7v2zm13 3v10h2V7h-2zm-3 13H7v2h10v-2zM4 17V7H2v10h2zm3 3a3 3 0 1-3-3H2a5 5 0 5 5v-2zm13-3a3 3 0 1-3 3v2a5 5 0 5-5h-2zM17 4a3 3 0 13 3h2a5 5 0 0-5-5v2zM7 2a5 5 0 0-5 5h2a3 3 0 13-3V2zm9 14H8v2h8v-2zM7.29 8.71l3 3 1.41-1.41-3-3-1.41 1.41zm3 1.59l-3 3 1.41 1.41 3-3-1.41-1.41z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrConsole;
