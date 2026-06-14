import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-dumbbell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDumbbell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.6 12.77a2 2 0 1 0 2.83-2.83l-1.77-1.77a2 2 0 0 0 2.83-2.83l-2.83-2.83a2 2 0 0 0-2.83 2.83l-1.77-1.77a2 2 0 1 0-2.83 2.83z"}],["path",{"d":"m2.5 21.5 1.4-1.4"}],["path",{"d":"m20.1 3.9 1.4-1.4"}],["path",{"d":"M5.34 21.49a2 2 0 1 0 2.83-2.83l1.77 1.77a2 2 0 1 0 2.83-2.83l-6.36-6.36a2 2 0 1 0-2.83 2.83l1.77 1.77a2 2 0 0 0-2.83 2.83z"}],["path",{"d":"m9.6 14.4 4.8-4.8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDumbbell;
