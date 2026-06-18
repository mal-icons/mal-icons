import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-guitar-pick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGuitarPick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 18.5c2 -2.5 4 -6.5 4 -10.5c0 -2.95 -2.08 -4.16 -4.2 -4.65c-0.86 -0.23 -2.13 -0.35 -3.8 -0.35c-1.67 0 -2.93 0.12 -3.8 0.35c-2.12 0.5 -4.2 1.71 -4.2 4.65c0 3.31 2 8 4 10.5c0.3 0.37 0.62 0.73 0.96 1.08l0.35 0.35a3.9 3.9 0 0 0 5.36 0a14.05 14.05 0 0 0 1.32 -1.43"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGuitarPick;
