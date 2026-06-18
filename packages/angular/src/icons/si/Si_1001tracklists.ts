import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-1001tracklists",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Si_1001tracklists {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.1 1.33v1.35H6.75v1.35H5.4V5.37H4.05v1.35H2.7v6.68H1.35v1.35H0v2.45h1.35v1.35h1.35v1.35h2.46v-7.84H3.81V7.82h1.35V6.48h1.35V5.13h1.35V3.79h8.29v1.35h1.35v1.35h1.35v1.35h1.35v4.23h-1.35v7.84h2.46V18.54h1.35v-1.35H24V14.75h-1.35v-1.35h-1.35V6.72h-1.35V5.37h-1.35V4.03h-1.35V2.68h-1.35V1.33Zm1.37 8v1.35H8.11v3.82h2.47v-4.06h2.95v4.35h-1.36v1.35h-1.35v2.46h2.47v-2.71H16v-5.22h-1.36V9.33Zm1.36 10.87v2.46h2.47v-2.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Si_1001tracklists;
