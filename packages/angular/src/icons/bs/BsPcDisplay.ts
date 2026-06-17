import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pc-display",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPcDisplay {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0m2 0a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0M9.5 1a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1zM9 3.5a0.50.5 0 0 0 0.50.5h5a0.50.5 0 0 0 0-1h-5a0.50.5 0 0 0-0.50.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-0.5a0.50.5 0 0 0 0 1H7v-4H1.5a0.50.5 0 0 1-0.5-0.5v-7a0.50.5 0 0 1 0.5-0.5H7V2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPcDisplay;
