import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-6k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdf_6kPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 12.5H8V14H6.5zM19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-9.5 7.5h-3v1h2c0.55 0 1 0.45 1 1V14c0 0.55-0.45 1-1 1H6c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3.5v1.5zM16 15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdf_6kPlus;
