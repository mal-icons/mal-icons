import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-broken-image",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfBrokenImage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.10.9-2 2-2h14c1.1 0 2 0.9 2 2zm-3 6.42 3 3.01V19c0 1.1-0.9 2-2 2H5c-1.1 0-2-0.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfBrokenImage;
