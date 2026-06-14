import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-croissant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCroissant {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.2 18H4.77a1.5 1.5 0 0 1-1.35-0.97 11 11 0 0 1 0.13-6.49"}],["path",{"d":"M18 10.2V4.77a1.5 1.5 0 0 0-0.97-1.35 11 11 0 0 0-6.490.13"}],["path",{"d":"M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.14 1.42"}],["path",{"d":"M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14"}],["path",{"d":"M8.71 2.55a10 10 0 0 0-6.15 6.16 1.5 1.5 0 0 0 0.68 1.63l9.81 5.42a2 2 0 0 0 2.72-2.72l-5.42-9.81a1.5 1.5 0 0 0-1.63-0.68"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCroissant;
