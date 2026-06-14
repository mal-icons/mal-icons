import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-kayak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuKayak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"}],["path",{"d":"M20.97 3.61a0.450.45 0 0 0-0.58-0.58C10.2 6.6 6.6 10.2 3.03 20.39a0.450.45 0 0 0 0.580.58C13.8 17.4 17.4 13.8 20.97 3.61"}],["path",{"d":"m6.71 6.71 10.59 10.59"}],["path",{"d":"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuKayak;
