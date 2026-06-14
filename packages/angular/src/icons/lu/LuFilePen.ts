import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-file-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFilePen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.66 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-0.71-1.71l-3.59-3.59A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M10.38 12.62a1 1 0 0 1 3 3L8.36 20.64a2 2 0 0 1-0.850.51l-2.870.84a0.50.5 0 0 1-0.62-0.62l0.84-2.87a2 2 0 0 1 0.51-0.85z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFilePen;
