import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-4g-plus-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Md_4gPlusMobiledata {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h4c1.1 0 2-0.9 2-2v-4h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Md_4gPlusMobiledata;
