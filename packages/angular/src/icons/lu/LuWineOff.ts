import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-wine-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuWineOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 22h8"}],["path",{"d":"M7 10h3m7 0h-1.34"}],["path",{"d":"M12 15v7"}],["path",{"d":"M7.31 7.31A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.39 4.39M8.64 2.98C8.75 2.67 8.87 2.34 9 2h6c1.5 4 2 6 2 8 0 0.41-0.050.81-0.14 1.2"}],["line",{"x1":"2","x2":"22","y1":"2","y2":"22"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuWineOff;
