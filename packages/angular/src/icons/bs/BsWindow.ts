import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-window",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsWindow {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 4a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m2-0.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m1 0.5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1"}],["path",{"d":"M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsWindow;
