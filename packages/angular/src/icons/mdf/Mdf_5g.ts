import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-5g",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdf_5g {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 13h2v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-4h-4v2zM3 13h5v2H3v2h5c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2H5V9h5V7H3v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdf_5g;
