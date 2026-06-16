import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-set-meal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSetMeal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.05 17.56-17.970.94L3 17l17.98-0.940.07 1.5zM21 19.48H3v1.5h18v-1.5zM23 13V4c0-1.1-0.9-2-2-2H3c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2zm-2 0H3V4h18v9zm-1-7c-1.68 0-3.040.98-3.21 2.23-0.64-0.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSetMeal;
