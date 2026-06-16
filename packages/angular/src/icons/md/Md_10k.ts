import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-10k",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Md_10k {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 6v10H5v-8.5h1V15h1.5V9H5V5h14v4z"}],["path",{"d":"M15.5 11.25V9H14v6h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75zM9.5 15H12c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1H9.5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1zm0.5-4.5h1.5v3H10v-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Md_10k;
