import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-dice-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDice5 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.95 7.06C14.95 5.95 15.84 5.06 16.95 5.06C18.05 5.06 18.95 5.95 18.95 7.06C18.95 8.16 18.05 9.06 16.95 9.06C15.84 9.06 14.95 8.16 14.95 7.06Z","fill":"currentColor"}],["path",{"d":"M16.95 14.89C15.84 14.89 14.95 15.79 14.95 16.89C14.95 18 15.84 18.89 16.95 18.89C18.05 18.89 18.95 18 18.95 16.89C18.95 15.79 18.05 14.89 16.95 14.89Z","fill":"currentColor"}],["path",{"d":"M5.06 16.89C5.06 15.79 5.95 14.89 7.06 14.89C8.16 14.89 9.06 15.79 9.06 16.89C9.06 18 8.16 18.89 7.06 18.89C5.95 18.89 5.06 18 5.06 16.89Z","fill":"currentColor"}],["path",{"d":"M7.06 5.06C5.95 5.06 5.06 5.95 5.06 7.06C5.06 8.16 5.95 9.06 7.06 9.06C8.16 9.06 9.06 8.16 9.06 7.06C9.06 5.95 8.16 5.06 7.06 5.06Z","fill":"currentColor"}],["path",{"d":"M10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 4C1 2.34 2.34 1 4 1H20C21.66 1 23 2.34 23 4V20C23 21.66 21.66 23 20 23H4C2.34 23 1 21.66 1 20V4ZM4 3H20C20.55 3 21 3.45 21 4V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDice5;
